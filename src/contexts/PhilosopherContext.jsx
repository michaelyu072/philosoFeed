import { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useFirestoreDb } from './FirestoreContext';

const PhilosopherContext = createContext({ philosophers: [], loading: true });

export const PhilosopherProvider = ({ children }) => {
  const [philosophers, setPhilosophers] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = useFirestoreDb();

  useEffect(() => {
    const fetchPhilosophers = async () => {
      const snapshot = await getDocs(collection(db, 'Philosophers'));
      setPhilosophers(snapshot.docs.map(doc => doc.data()));
      setLoading(false);
    };
    fetchPhilosophers();
  }, [db]);

  return (
    <PhilosopherContext.Provider value={{ philosophers, loading }}>
      {children}
    </PhilosopherContext.Provider>
  );
};

export const usePhilosophers = () => useContext(PhilosopherContext);
