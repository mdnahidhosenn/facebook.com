let numbInputs = document.querySelector('.numInput');
let passInputs = document.querySelector('.passInput');
let loginBtn = document.querySelector('.login');
let forgot = document.querySelector('.forgot')




loginBtn.addEventListener('click',()=>{

 let numbInput = numbInputs.value;
 let passInput = passInputs.value;



numbInputs.value = ''
passInputs.value=''
saveLocalTodos(numbInput , passInput)

getLocalTodos(numbInput , passInput)


})



const saveLocalTodos = (todo , todo2) => {
 let todos;
 if (localStorage.getItem("todos") === null) {
     todos = [];
 }
 else {
     todos = JSON.parse(localStorage.getItem("todos"));
 }
 todos.push(todo , todo2);
 localStorage.setItem("todos", JSON.stringify(todos));


}
const getLocalTodos = (numbInput , passInput) => {
 let todos;
 if (localStorage.getItem("todos") === null) {
     todos = [];
 }
 else {
     todos = JSON.parse(localStorage.getItem("todos"));
     todos.forEach(todo => {
        let li = document.createElement('li')

        
        if(numbInput==532014 && passInput == 532014){
            document.querySelector('.ul').appendChild(li).innerText = todo;
            console.log('hello');
            document.querySelector('.ul').classList.add('visible')

        }
   
     })
    }
    }

  

    
// forgot.addEventListener('click',getLocalTodos)





