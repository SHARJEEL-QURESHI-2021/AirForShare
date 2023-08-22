import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, query, collection, deleteDoc, onSnapshot, doc, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3ZvtJgykA5zlFpKuhnsSq_Ay6HKZlNec",
    authDomain: "task-e2185.firebaseapp.com",
    projectId: "task-e2185",
    storageBucket: "task-e2185.appspot.com",
    messagingSenderId: "447773639548",
    appId: "1:447773639548:web:c917761b6d901682781af9",
    measurementId: "G-0D3K0WGC3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Clear button
let btns = document.getElementById('btns');

// Save button
let btn = document.getElementById('btn');

btn.addEventListener('click', async () => {
    let inp = document.getElementById('inp').value;
    try {
        const docRef = await addDoc(collection(db, "AirForShare"), {
            Text: inp,
        })
        console.log("AirForShare ID: ", docRef.id);
    } catch (error) {
        console.error("AirForShare Error:", error);
    }

    btn.style.display = "none";
    btns.style.display = "block";
    console.log(inp);
})

const querySnapshot = await getDocs(collection(db, "AirForShare"));
querySnapshot.forEach((doc) => {
    console.log(`AirForShare-->${doc.id} => ${JSON.stringify(doc.data())}`);
    let inp = document.getElementById('inp').value
    inp = doc.data().Text;
    console.log(inp);
    btns.style.display = "none";
})

async function delet() {
    const querySnapshot = await getDocs(collection(db, "AirForShare"));
    querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
    });
    console.log("All Documents In AirForShare Collection Deleted.");

    btn.style.display = "block";
    btns.style.display = "none";
    inp.value = ""; // Clear textarea value
}
// delet("AirForShare")
window.delet = delet 