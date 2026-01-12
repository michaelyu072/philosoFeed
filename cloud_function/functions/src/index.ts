import { onSchedule } from "firebase-functions/v2/scheduler";
import * as admin from "firebase-admin";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { defineSecret } from "firebase-functions/params";

admin.initializeApp();
const geminiKey = defineSecret("GEMINI_API_KEY");

// Define an interface for better TypeScript support
interface DebateResponse {
  debate: {
    participant1: string;
    participant2: string;
    id: string;
    topic: string;
    responses: Array<{
      participant: string;
      content: string;
    }>;
  };
}

export const simulatePhilosopherDebate = onSchedule({
  schedule: "0 */12 * * *",
  secrets: [geminiKey],
}, async (event) => {
  const db = admin.firestore();
  
  // 1. Fetch philosophers
  const snapshot = await db.collection("Philosophers").get();
  if (snapshot.docs.length < 2) return console.log("Not enough philosophers!");

  // 2. Pick 2 random philosophers
  const shuffled = snapshot.docs.sort(() => 0.5 - Math.random());
  const p1 = shuffled[0].data();
  const p2 = shuffled[1].data();

  // 3. Configure Gemini for JSON Mode
  const genAI = new GoogleGenerativeAI(geminiKey.value());
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    // This tells Gemini to return ONLY raw JSON
    generationConfig: { responseMimeType: "application/json" }
  },{
    // Explicitly set the baseUrl if you still get 401s in the cloud
    baseUrl: "https://generativelanguage.googleapis.com" 
  });

  const prompt = `Simulate a short, intense debate between ${p1.name} and ${p2.name}. 
    5 responses total. Topic: The nature of truth. 
    Use the following JSON schema:
    {
      "debate": {
        "participant1": "string",
        "participant2": "string",
        "topic": "string",
        "responses": [{"participant": "string", "content": "string"}]
      }
    }`;

  try {
    const result = await model.generateContent(prompt);
    // Gemini in JSON mode returns the string without markdown backticks
    const debateJson = JSON.parse(result.response.text()) as DebateResponse;
    debateJson.debate.id = admin.firestore().collection('_').doc().id;

    // 4. Save to Firestore
    await db.collection("debates").add({
      participants: [p1.name, p2.name],
      debateData: debateJson.debate,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`Success: Debate between ${p1.name} and ${p2.name} saved.`);
  } catch (error) {
    console.error("Debate Generation Failed:", error);
  }
});