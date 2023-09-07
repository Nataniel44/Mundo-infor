import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDsMnJ9hnWK_iJEg6BdtvYd8DrIbIj19yk",
  authDomain: "mundo-infor.firebaseapp.com",
  projectId: "mundo-infor",
  storageBucket: "mundo-infor.appspot.com",
  messagingSenderId: "202861069898",
  appId: "1:202861069898:web:e6b92afbf6cc74e38f08b3",
  measurementId: "G-QLC2JKX4P1",
  databaseURL: "https://MUNDO-INFOR.firebaseio.com",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de autentificación
export const auth = getAuth(app);

const storage = getStorage(app);

// Obtiene una instancia de Firestore (base de datos)
const db = getFirestore(app);

export async function userExists(uid) {
  const docRef = doc(db, "users", uid);
  const res = await getDoc(docRef);

  return res.exists();
}
export async function existsUsername(username) {
  const users = [];
  const docRef = collection(db, "users");
  const q = query(docRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  return users.length > 0 ? users[0].uid : null;
}
export async function registerNewUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {
    console.log(error);
  }
}
export async function updateUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {
    console.log(error);
  }
}
export async function getUserInfo(uid) {
  try {
    const docRef = doc(db, "users", uid);
    const document = await getDoc(docRef);
    return document.data();
  } catch (error) {
    console.log(error);
  }
}
export { db }; // Exporta la instancia de Firestore
