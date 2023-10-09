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
  updateDoc,
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
export async function getAdminInfo(uid) {
  try {
    const docRef = doc(db, "users", uid);
    const document = await getDoc(docRef);
    const userInfo = document.data();
    return userInfo;
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

export async function insertNewLink(link) {
  try {
    const docRef = collection(db, "link");
    const res = await addDoc(docRef, link);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getLinks(uid) {
  const links = [];
  try {
    const collectionRef = collection(db, "link");
    const q = query(collectionRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const link = { ...doc.data() };
      link.docId = doc.id;
      links.push(link);
    });

    return links;
  } catch (error) {
    console.log(error);
  }
}
export async function setUserProfilePhoto(uid, file) {
  try {
    const imageRef = ref(storage, `img/${uid}`);
    const resUpload = await uploadBytes(imageRef, file);
    return resUpload;
  } catch (error) {
    console.log(error);
  }
}
export async function getProfilePhotoUrl(profilePicture) {
  try {
    const imageRef = ref(storage, profilePicture);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error(error);
  }
}
export async function getVideoUrl(videoPath) {
  try {
    const videoRef = ref(storage, videoPath);
    const url = await getDownloadURL(videoRef);
    return url;
  } catch (error) {
    console.error("Error al obtener la URL del video:", error);
    throw error; // Puedes lanzar una excepción para manejar el error en otro lugar si es necesario
  }
}

export const obtenerCursosDeFirestore = async () => {
  try {
    const cursosCollection = collection(db, "cursos"); // Reemplaza 'cursos' con el nombre de tu colección en Firestore.
    const cursosSnapshot = await getDocs(cursosCollection);
    const cursosData = cursosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return cursosData;
  } catch (error) {
    console.error("Error al obtener los cursos: ", error);
    return [];
  }
};

export const actualizarCursoEnFirestore = async (cursoId, nuevosDatosCurso) => {
  try {
    const cursoDocRef = doc(db, "cursos", cursoId); // Reemplaza 'cursos' con el nombre de tu colección en Firestore.

    await updateDoc(cursoDocRef, nuevosDatosCurso);

    console.log("Curso actualizado con éxito.");
  } catch (error) {
    console.error("Error al actualizar el curso: ", error);
  }
};
