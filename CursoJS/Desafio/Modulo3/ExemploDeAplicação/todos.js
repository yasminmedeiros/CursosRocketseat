var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem("Lista de todos")) || [];

function addTodo() {

    console.log("todo add")
    var todoTexto = inputElement.value;
    todos.push(todoTexto);

    inputElement.value = "";
    saveToStorage();
    renderTodos();
}

function renderTodos() {
    listElement.innerHTML = "";
    for (todo of todos) {
        var todoElemento = document.createElement('li');
        var elemento = document.createTextNode(todo);

        var linkElement = document.createElement('a');


        linkElement.setAttribute('href', '#'); // #->efeito nenhum
        todoElemento.appendChild(elemento);
        todoElemento.appendChild(linkElement);
        listElement.appendChild(todoElemento);

        var pos = todos.indexOf(todo);
        console.log(pos);
        var linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        linkElement.addEventListener("click", function() {
            //console.log(pos);
            todos.splice(pos, 1);
            //console.log("excluido");
            //console.log(todos);
            saveToStorage();
            renderTodos();

        }, true);

    }
    console.log('renderizou uma vez');
}


// remove um item.


renderTodos();

buttonElement.addEventListener("click", addTodo, true);

function saveToStorage() {
    localStorage.setItem("Lista de todos", JSON.stringify(todos)); // nome do item e conversão de todos para string 
}