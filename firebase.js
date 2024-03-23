// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBWjuc5_FOaDSZcYGdkyoIpL48M_eSnMuA",
    authDomain: "olx-clone-cd6ab.firebaseapp.com",
    projectId: "olx-clone-cd6ab",
    storageBucket: "olx-clone-cd6ab.appspot.com",
    messagingSenderId: "939520210323",
    appId: "1:939520210323:web:7697d6a4f2d05130296466",
    measurementId: "G-LSLXWWWYTC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getElem(){
let todocol = collection(db, "todo");
let data = await getDocs(todocol);
data.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}

function createElem() {
  var input = document.getElementById('input');

  const docRef = addDoc(collection(db, "todo"), {
    todo: input.value,
  });
  console.log("Document written with ID: ", docRef.id);
}

window.createElem = createElem;
getElem()

