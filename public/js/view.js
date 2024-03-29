$(document).ready(function () {
  // Getting a reference to the input field where user adds a new todo
  var $newItemInput = $("input.new-item");
  // Our new todos will go inside the todoContainer
  var $todoContainer = $(".todo-container");
  // Adding event listeners for deleting, editing, and adding todos
  $(document).on("click", "button.delete", deleteTodo);
  $(document).on("click", "button.complete", toggleComplete);
  $(document).on("click", ".todo-item", editTodo);
  $(document).on("keyup", ".todo-item", finishEdit);
  $(document).on("blur", ".todo-item", cancelEdit);
  $(document).on("click", ".moodsele", pickMood)
  $(document).on("click", "#takeUser", takeUser)
  $(document).on("click", "#showList", toggleList)
  $(document).on("click", "#noShow", toggleList)
  // Our initial todos array
  var users;
  var mood;


  // Getting todos from database when page loads
  getUsers();

  function toggleList(e) {
    e.preventDefault()
    var toggleBool = $(this).attr("id")
    if($(this).attr("id")=== "noShow"){
      $(".todo-container").css("display","none")
    }else{
      $(".todo-container").css("display","inline")
    }
  }
  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    $todoContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < users.length; i++) {
      rowsToAdd.push(createNewRow(users[i]));
    }
    $todoContainer.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getUsers() {
    $.get("/users", function (data) {
      users = data
      // console.log(data)
      initializeRows();
    });
  }

  // This function deletes a todo when the user clicks the delete button
  function deleteTodo(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/todos/" + id
    }).then(getUsers);
  }

  // This function handles showing the input box for a user to edit a todo
  function editTodo() {
    var currentTodo = $(this).data("todo");
    $(this).children().hide();
    $(this).children("input.edit").val(currentTodo.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }

  

  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var todo = $(this).parent().data("todo");
    todo.complete = !todo.complete;
    updateTodo(todo);
  }

  // This function starts updating a todo in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit(event) {
    var updatedTodo = $(this).data("todo");
    if (event.which === 13) {
      updatedTodo.text = $(this).children("input").val().trim();
      $(this).blur();
      updateTodo(updatedTodo);
    }
  }

  // This function updates a todo in our database
  function updateTodo(todo) {
    $.ajax({
      method: "PUT",
      url: "/api/todos",
      data: todo
    }).then(getTodos);
  }

  // This function is called whenever a todo item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentTodo = $(this).data("todo");
    if (currentTodo) {
      $(this).children().hide();
      $(this).children("input.edit").val(currentTodo.text);
      $(this).children("span").show();
      $(this).children("button").show();
    }
  }

  // This function constructs a todo-item row
  function createNewRow(todo) {
    var $newInputRow = $(
      [
        "<li class='list-group-item todo-item'>",
        "<span>",
        todo.name,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        `<br><span>${todo.strain}</span>`,
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );

    $newInputRow.find("button.delete").data("id", todo.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("todo", todo);
    if (todo.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }

  // This function inserts a new todo into our database and then updates the view
  function insertTodo(event) {
    event.preventDefault();
    var todo = {
      text: $newItemInput.val().trim(),
      complete: false
    };

    $.post("/api/todos", todo, getTodos);
    $newItemInput.val("");
  }

function takeUser(e) {
    e.preventDefault();
  let info= {name : $(".new-name").val().trim(),
    mood : mood}
   calculate(info)
  }

  function pickMood(e){
    e.preventDefault()
mood = $(this).val()
console.log(mood)
  }





  async function calculate(info) {
    let randomStrain;
    if (info.mood == "Sleepy") {
      console.log("you are sleepy")
      $.get("/api/indica").then(function (cb) {
        randomStrain = cb[Math.floor(Math.random() * cb.length)]
        console.log(randomStrain)
        $.post("/api/mood", { name: info.name, mood: info.mood, strain: randomStrain.name }).then(function (cb) {
      console.log(cb)})
      getUsers()
      })
    } else if (info.mood == "Energetic") {
      console.log("you are energetic")
      $.get("/api/sativa").then(function (cb) {
        randomStrain = cb[Math.floor(Math.random() * cb.length)]
        console.log(randomStrain)
        $.post("/api/mood", { name: info.name, mood: info.mood, strain: randomStrain.name }).then(function (cb) {
          console.log(cb)})
          getUsers()
      })
    } else {
      console.log("You are anxious")
      $.get("/api/hybrid").then(function (cb) {
        randomStrain = cb[Math.floor(Math.random() * cb.length)]
        console.log(randomStrain)
        $.post("/api/mood", { name: info.name, mood: info.mood, strain: randomStrain.name }).then(function (cb) {
          console.log(cb)})
          getUsers()
      })
    }

  }
})
