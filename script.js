var addTodo = document.querySelector('#addNewTodo');
var list = document.querySelector('ul');
addTodo.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        if(addTodo.value != ''){
            const createItem = document.createElement("LI");
            createItem.innerHTML = `<p>${addTodo.value}</p> <i class="fa fa-trash" aria-hidden="true"></i>`;
            list.appendChild(createItem);
            addTodo.value = '';
        }
        else{
            alert('Please enter a valid Todo');
        }
      }
});

list.addEventListener('click', e => {
    if(e.target.tagName == 'I'){
        e.target.parentNode.remove();
    }
});

function filterTodos(term){
    (Array.from(list.children))
    .filter(item => !(item.textContent.toLocaleLowerCase().includes(term)))
    .forEach(todo => todo.classList.add('hideTodo'));
}
function removeFilter(term){
    Array.from(list.children)
    .filter(item => (item.textContent.toLocaleLowerCase().includes(term)))
    .forEach(todo => todo.classList.remove('hideTodo'));
}
var searchTodo = document.querySelector('#search-todos');
var TodoContent = document.querySelectorAll('li');
searchTodo.addEventListener('keyup', e => {
    // var filtered = [];
    const term = searchTodo.value.trim().toLowerCase();
    if(e.key === "Backspace"){
        removeFilter(term);
    }
    // TodoContent.forEach(item => {
    //     if(!(item.textContent.includes(searchTodo.value))){
    //         filtered.push(item);
    //     }
    // });
    // filtered.forEach(elem => {
    //     elem.style.display = 'none';
    // });
    else{
        filterTodos(term);
    }
    
    
});
