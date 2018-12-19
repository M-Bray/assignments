const ul = document.querySelector("ul");
const form = document.querySelector("form");

function getAllTodos(url) {
    return axios.get(url)
    .then(response => response.data)
}

function renderTodo(todo) {

    //Create Elements
    const li = document.createElement("li");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const completed = document.createElement("input");
    const deleteBtn = 

    //modify
    title.textContent = todo.title;
    description.textContent = todo.description;
    price.textContent = todo.price;
    completed.type = "checkbox";
    completed.checked = todo.completed;

//append to the DOM
ul.appendChild(li);
[li, title, description price, completed].forEach(el => li.appendChild(el));

}

function renderList(todos) {
    todos.forEach(renderTodo)
}

const baseUrl = "https://api.vschool.io/----------------/todo";
getAllTodos(baseUrl)
.then(renderList):

//POST
// TYPE INTO FORM --> SUBMIT FORM --> GATHER ALL INPUTS INTO REQ --> DISPLAY RESPONSE DATA






//SETTING HEX CODES FOR COLOR BLIND\CONTRAST\\
// ARIA FOR COMPLETELY BLIND\\