import { createContext, useContext } from 'react';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

if (!window._firebaseApp) {
  window._firebaseApp = initializeApp(firebaseConfig);
}
const db = getFirestore(window._firebaseApp);

const FirestoreContext = createContext(db);

export const FirestoreProvider = ({ children }) => (
  <FirestoreContext.Provider value={db}>{children}</FirestoreContext.Provider>
);

export const useFirestoreDb = () => useContext(FirestoreContext);
