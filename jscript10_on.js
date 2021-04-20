//10 - Project todo list
//77 Project preview and set-up
//78 html and CSS templates
//79 Adding todos
const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `    
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;      //check where this ` starts!
    list.innerHTML += html;
};
    const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
      .filter(todo => !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));
    //console.log(term);
    // remove filtered class
    Array.from(list.children)
      .filter(todo => todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.remove('filtered')); 
      //console.log(term); 
  };
    addForm.addEventListener('submit', e => {
  
    e.preventDefault();
    const todo = addForm.add.value.trim();
//   console.log(todo);

    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }

});

//80. Deleting Todos  see also filter code lines 18 to 29
// delete todos event
    list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
      e.target.parentElement.remove();
    }
  
  });

  //81 Searching and filtering todos
  // filter todos event
    search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
  
  });