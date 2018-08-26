const taskInput = $("#add-task");
const startArea = $("#start-area-list");
const inProgressArea = $("#inProgress-area-list");
const doneArea = $("#done-area-list");

taskInput.on("keypress", function(event) {
    if(event.which === 13) {
        addTask();
    }
})

const addTask = function () {
    const taskText = $("#add-task").val();
    startArea.append(`<li class="task"><span><i class="fas fa-trash-alt"></i></span>${taskText}</li>`);
    taskInput.val("");
}

startArea.on("click", "li", function() {
    let startTask = $(this).text();
    $(this).fadeOut(300, function() {
        inProgressArea.append(`<li class="task"><span><i class="fas fa-trash-alt"></i></span>${startTask}</li>`);
        $(this).remove();
    })
});


startArea.on("click", "span", function(event){
    $(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
    event.stopPropagation();
});


inProgressArea.on("click", "li", function() {
    let inProgressTask = $(this).text();
    $(this).fadeOut(300, function() {
        doneArea.append(`<li class="task"><span><i class="fas fa-trash-alt"></i></span>${inProgressTask}</li>`);
        $(this).remove();
    })
});

inProgressArea.on("click", "span", function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
    event.stopPropagation();
});

doneArea.on("click", "span", function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
    event.stopPropagation();
});







 


