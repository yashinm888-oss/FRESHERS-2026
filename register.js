import { db, collection, addDoc, serverTimestamp } from "./firebase.js";

const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const student = {

name: document.getElementById("name").value,

usn: document.getElementById("usn").value,

year: document.getElementById("year").value,

section: document.getElementById("section").value,

email: document.getElementById("email").value,

phone: document.getElementById("phone").value,

gender: document.getElementById("gender").value,

createdAt: serverTimestamp()

};

try{

await addDoc(collection(db,"registrations"),student);

alert("Registration Successful 🎉");

form.reset();

}

catch(error){

alert(error.message);

}

});