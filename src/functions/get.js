import { db } from '../firebase/credentials';
import { collection, getDocs } from 'firebase/firestore';

export const getCollection = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'projects'));
    const projects = [];
    snapshot.forEach((doc) => {
      projects.push(doc.data());
    });
    return projects;
  } catch (error) {
    console.error({ message: 'error', details: error });
  }
};
