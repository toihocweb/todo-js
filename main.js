// your code

var todos = [
    {
        id: 1,
        content: "text to crush",
        done: false
    }
]

// render Todo
var renderTodos = (todos) => { 
    // remove all ul child
    var lis = document.querySelectorAll("ul li")
    lis.forEach((li) => { 
        li.remove()
    })
    // load todos ra giao dien
    todos.forEach((val) => {
        var li = document.createElement("li")
        li.innerHTML = `${val.content}
                <span data-id=${val.id} class="btn-edit"><i class="fas fa-edit"></i></span>
                <span data-id=${val.id} class="btn-delete"><i class="fas fa-trash"></i></span>`
        ul.appendChild(li)
    })
}

// CRUD -> create, read, update, delete 

// load todo tu mang
var ul = document.querySelector("ul")


renderTodos(todos)

var submitBtn = document.querySelector(".submit")
var input = document.querySelector(".todo-input")


submitBtn.addEventListener("click", function(e){
    var inputValue = input.value
    if (!inputValue) {
        alert("input is empty!")
    } else { 
        todos.push({
            id: Date.now(),
            content: inputValue,
            done: false
        })
        // remove all ul child
        renderTodos(todos)
        // empty input
        input.value = ""
    }
})

document.addEventListener("click", function(e) {
    var target = e.target
    var btnDelete = target.closest(".btn-delete")
   if (btnDelete) {
     var id = btnDelete.getAttribute("data-id")
     var idx = todos.findIndex(val => val.id == id)
     todos.splice(idx, 1)
     renderTodos(todos)
   }
})
