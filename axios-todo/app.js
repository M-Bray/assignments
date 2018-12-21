//SETTING HEX CODES FOR COLOR BLIND\CONTRAST\\
// ARIA FOR COMPLETELY BLIND\\

//GLOBAL DOM ELEMENTS
const ul = document.querySelector('ul');
const form = document.querySelector('form');

//URL
const baseUrl = 'https://api.vschool.io/ben/todo/';

//REQUESTS

//GET
function getAllTodos(url) {
    return axios.get(url)
        .then(response => response.data)
}
//POST
function addTodo(todo, url) {
    return axios.post(url, todo)
        .then(response => response.data);
}
//EDIT
function editTodo(url, updater) {
    return axios.put(url, updater)
        .then(response => response.data);
}
//DELETE
function deleteTodo(url) {
    return axios.delete(url)
}

//HELPERS (render data, handle events)
function renderList(todos) {
    todos.forEach(renderTodo)
}

function genElement(template) {
    const el = document.createElement(template.element);
    for (key in template.attributes) {
        el[key] = template.attributes[key];
    }
    for (key in template.eventListeners) {
        const config = template.eventListeners[key];
        el.addEventListener(config.event, config.cb);
    }
    template.children && template.children.forEach(child => el.append(genElement(child)));
    return el;
}

function convertToTemplate(todo) {
    return {
        element: 'li',
        attributes: {
            id: todo._id
        },
        children: [
            {
                element: 'h3',
                attributes: {
                    textContent: todo.title
                }
            }, {
                element: 'p',
                attributes: {
                    textContent: todo.description
                }
            }, {
                element: 'p',
                attributes: {
                    textContent: todo.price
                }
            }, {
                element: 'input',
                attributes: {
                    type: 'checkbox',
                    checked: todo.completed
                },
                eventListeners: [{
                    event: 'input',
                    cb: handleEdit(baseUrl + todo._id)
                }]
            }, {
                element: 'button',
                attributes: {
                    textContent: 'X'
                },
                eventListeners: [{
                    event: 'click',
                    cb: handleDelete(baseUrl + todo._id, todo._id)
                }]
            }
        ]
    }
}

function renderTodo(todo) {
    ul.appendChild(genElement(convertToTemplate(todo)))
}

//EVENT HANDLERS
function handleSubmit(e) {
    e.preventDefault();
    const todo = {
        title: this.title.value,
        description: this.description.value,
        imgUrl: this.imgUrl.value,
        price: this.price.value
    }
    addTodo(todo, baseUrl)
        .then(renderTodo)
        .then(() => this.reset());
}
function handleDelete(url, id) {
    //delete todo from server
    return e => {
        deleteTodo(url)
            //remove li from DOM
            .then(() => document.getElementById(id).remove());
    }
}
function handleEdit(url) {
    return e => {
        editTodo(url, { completed: e.target.checked })
    }
}

//GET ALL THE TODOS INITIALLY WHEN THE APP LOADS

getAllTodos(baseUrl)
    .then(renderList);

// ALLOW USER TO ADD NEW TODOS