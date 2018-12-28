let listTodo=null;
let toDoList=null;
let listInput=null;

document.addEventListener("DOMContentLoaded", (e) => {
listTodo=document.querySelector("#list-drop");
toDoList= document.querySelector("#list_to_do");
listInput=document.querySelector("#to_do_list");

loadList();
    listInput.addEventListener("submit", (e) => {
        e.preventDefault();
        let list_text = listInput.value;
        if(list_text.trim() === "") {
            alert("Please write an item");
        } else {
            addList(list_text.trim());
            saveList(list_text.trim());
           listInput.value = "";
        }
    })
})

function addList(text) {
    let template = document.createElement("li");
    template.classList.add("item");
    template.innerText = text;
    listTodo.appendChild(template);
}
function saveList(text) {
    let items = localStorage.getItem("local_plan");
    if(items == null) {
        items = [];
    } else {
        items = JSON.parse(items);
    }
    items.push(text);
    localStorage.setItem("local_plan", JSON.stringify(items));
}
function loaditem() {
    let lists = localStorage.getItem("local_list");
    if(lists == null) return;
    lists = JSON.parse(list);
    for(let list of lists) {
        addList(list);
    }
}
var input = document.getElementById("list_to_do");
input.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
});

