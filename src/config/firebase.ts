import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { 
  getFirestore,
  collection,
  onSnapshot,
  doc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2aMOVistRSqRg60hhajAezZVggyTtn-E",
  authDomain: "kostoff-dev.firebaseapp.com",
  projectId: "kostoff-dev",
  storageBucket: "kostoff-dev.appspot.com",
  messagingSenderId: "351675760847",
  appId: "1:351675760847:web:afef4a4b50022e738b37ba",
  measurementId: "G-K5QZ9J6PC8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// collection ref
const projectsColRef = collection(db, "projects");

// get real time collection data
onSnapshot(projectsColRef, (snapshot) => {
  let projects: any = [];
  snapshot.docs.forEach(doc => {
    projects.push({ ...doc.data(), id: doc.id });
  });
  console.log(projects);
})

// get a real time listener for a single document
const docRef = doc(db, 'projects', '3XWooAYA4xWxhBUhma46');

onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
})

export { db }