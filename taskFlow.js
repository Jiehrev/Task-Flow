const addTaskInput = $("#add-task");

$(addTaskInput).on("keypress", function(event) {
    if(event.which === 13) {
        addTask();
    }
})

function addTask() {
    let taskText = addTaskInput.val();
    $("#start-area-list").append(`<li>${taskText}</li>`);
    addTaskInput.val("");
}