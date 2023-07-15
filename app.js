


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDIAlBM1E0MD-b83-ufwGu2XSPZMphN2nE",
    authDomain: "todo-project-ca959.firebaseapp.com",
    projectId: "todo-project-ca959",
    storageBucket: "todo-project-ca959.appspot.com",
    messagingSenderId: "235000015044",
    appId: "1:235000015044:web:e510ee9b4f59db80aa0191"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)



var item = document.querySelector("#item");
var ul = document.getElementById("ul")

let addTodo = document.getElementById("addTodo")
addTodo.addEventListener("click", addTodoFun)


async function addTodoFun() {
    try {
        let itemObj = {
            todo: item.value
        }
        const docRef = await addDoc(collection(db, "todos"), itemObj);
        alert("your data save in data base")
    } catch (error) {
        console.log("ERROR", error.message)
    }
    item.value = " "
    window.location.reload()
}

window.addEventListener("load", async () => {

    try {
        let ul = document.getElementById("ul")
        const querySnapshot = await getDocs(collection(db, "todos"));
        alert("wait for load a data")
        querySnapshot.forEach((doc) => {
            let data = doc.data();

            ul.innerHTML += `<li>
${data.todo}

<button class="btn1" onclick = "delButton(this)">Delete</button>
<button class="btn2"  onclick = "editButton(this)">Edit</button>
</li>`

        });
    } catch (error) {
        console.log("ERROr", error.message)
    }

})

function delButton(ele) {
    // ele.parentNode.remove()

}
var edit = false;
function editButton(e) {
    // var oldVal = e.parentNode.firstChild.nodeValue;
    // var updateVal = prompt("enter your value", oldVal)
    // e.parentNode.firstChild.nodeValue = updateVal
    // console.log(e.parentNode.firstChild.nodeValue)





}

function deleteAll() {
    // ul.innerHTML = ''
}




