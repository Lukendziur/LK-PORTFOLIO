import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjRvTkkWriyWjWrOBf6Os6cCOLCNGWvhc',
  authDomain: 'kendziur-portfolio.firebaseapp.com',
  projectId: 'kendziur-portfolio',
  storageBucket: 'kendziur-portfolio.appspot.com',
  messagingSenderId: '569309139103',
  appId: '1:569309139103:web:3ca25a11a40b8f7e48d2aa',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
