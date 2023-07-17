


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

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

            ul.innerHTML += `<li id="${doc.id}">
${data.todo}

<button  class="btn1" onclick = "delButton()">Delete</button>
<button  class="btn2"  onclick = "editButton()">Edit</button>
</li>`

        });
    } catch (error) {
        console.log("ERROr", error.message)
    }

})

window.delButton = async function delButton(ele) {
    try {

        let li = event.target.parentNode
        event.target.parentNode.remove()
        const deleteItem = await deleteDoc(doc(db, "todos", li.id));
    }
    catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }

}

window.editButton = async function editButton(ele) {

    try {

        console.log("li", event.target.parentNode.firstChild.nodeValue)
        let li = event.target.parentNode
        let oldVal = li.firstChild.nodeValue
        let editValue = prompt("Edit Todo", oldVal)


        const updateData = await updateDoc(doc(db, "todos", li.id), {
            todo: editValue
        });
        li.firstChild.nodeValue = editValue
    } catch (error) {
        console.log(error.message, 'error')
        alert(error.message)
    }
    window.location.reload();
}

function deleteAll() {

}




