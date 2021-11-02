$(document).ready(function () {
  let tasks = [];

  $("#submit").on("click", function () {
    let newTask = $("#newTask").val();

    if (newTask !== "") {
      tasks.push(newTask);

      $("#taskList").empty();

      tasks.forEach((t) =>
        $("#taskList").append(`<div class="task">${t}</div>`)
      );
    } 
  });

   // BOTÓN DE BORRAR
   $('#submit').on("click", function () {
    // ...
})

    $('#clearButton').on("click", function () {
        if (newTask !== "") {
            tasks.splice(newTask);
      
            $("#taskList").empty();
          }
          

          
})
})
