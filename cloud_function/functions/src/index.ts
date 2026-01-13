import { onSchedule } from "firebase-functions/v2/scheduler";
import * as admin from "firebase-admin";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { defineSecret } from "firebase-functions/params";

admin.initializeApp();
const geminiKey = defineSecret("GEMINI_API_KEY");
 const philosophyDebateTopics: string[] = [
  "Does the objective reality exist independent of our observation?",
  "Is free will an illusion in a deterministic universe?",
  "Can an artificial intelligence ever truly possess consciousness?",
  "Is morality objective or merely a social construct?",
  "If you replace every part of a ship, is it still the same ship? (Ship of Theseus)",
  "Is the pursuit of happiness the ultimate goal of human existence?",
  "Would a world without pain be better or worse for human growth?",
  "Do humans have a natural right to property?",
  "Is it ever ethical to sacrifice one life to save five? (The Trolley Problem)",
  "Does power inherently corrupt, or does it just reveal one's true nature?",
  "Is it possible to live a completely 'good' life in a modern global economy?",
  "Should we fear death if we will not exist to experience it?",
  "Is privacy a fundamental human right or a luxury of the past?",
  "Does the end always justify the means in political leadership?",
  "Is beauty in the eye of the beholder, or are there universal aesthetic truths?",
  "Can we ever truly know anything with absolute certainty?",
  "Is 'nothing' a valid concept, or is the absence of something still 'something'?",
  "Should biological immortality be a goal for humanity?",
  "Is altruism ever truly selfless, or is there always a hidden egoistic motive?",
  "Does language limit or enable the depth of human thought?",
  "If a tree falls in a forest and no one is there to hear it, does it make a sound?",
  "Is the soul a distinct entity from the physical brain?",
  "Should we prioritize the well-being of the collective over the rights of the individual?",
  "Is utopia a dangerous ideal or a necessary goal?",
  "Is it better to be a 'dissatisfied Socrates' or a 'satisfied pig'?",
  "Does life have intrinsic meaning, or must we create it ourselves?",
  "Is civil disobedience a moral obligation when laws are unjust?",
  "Can war ever be considered 'just'?",
  "Is the concept of 'evil' useful in modern psychology and law?",
  "Should we edit the human genome to eliminate hereditary diseases?",
  "Is mathematical truth discovered or invented by humans?",
  "Would a perfectly simulated universe be indistinguishable from reality?",
  "Is it ethical to have children in an overpopulated or failing world?",
  "Does the state derive its power from the consent of the governed or through force?",
  "Is gender a performance, a biological reality, or a combination of both?",
  "Should freedom of speech be absolute, even if it causes social harm?",
  "If you could live forever in a blissful digital simulation, would you?",
  "Is justice best served through retribution or rehabilitation?",
  "Are humans naturally cooperative or naturally competitive?",
  "Does the existence of suffering disprove the existence of an all-powerful, benevolent creator?",
  "The Nature of Reality",
  "Defining Beauty",
  "The Ethics of AI",
  "Free Will vs. Determinism",
  "The Purpose of Suffering",
  "The Concept of Time",
  "Personal Identity",
  "Objective vs. Subjective Truth",
  "The Morality of Wealth",
  "Consciousness and the Brain",
  "The Just War Theory",
  "Utopia vs. Dystopia",
  "The Meaning of Life",
  "Human Nature",
  "The Limits of Language",
  "Virtue Ethics",
  "The Social Contract",
  "Existential Dread",
  "Animal Rights",
  "The Paradox of Tolerance"
    ];

// Define an interface for better TypeScript support
interface DebateResponse {
  quote: {
    author: string;
    content: string;
  };
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
  schedule: "0 9 * * *",
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

  const randomTopic = philosophyDebateTopics[Math.floor(Math.random() * philosophyDebateTopics.length)];
  const prompt = `Simulate a short, intense debate between ${p1.name} and ${p2.name}. 
    5 responses total. debate topic: ${randomTopic}. 
    Also find a real quote from one of the philosophers to be used as daily quote.
    Use the following JSON schema:
    {
      "quote": {
        "author": "string",
        "content": "string"
      },
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

    await db.collection("quotes").add({
      author: debateJson.quote.author,
      content: debateJson.quote.content,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      debateId: debateJson.debate.id,
    });

    // 4. Save to Firestore
    await db.collection("debates").add({
      debateData: debateJson.debate,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`Success: Debate between ${p1.name} and ${p2.name} saved.`);
    return;
  } catch (error) {
    console.error("Debate Generation Failed:", error);
    return;
  }
});