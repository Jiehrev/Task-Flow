const taskInput = $("#add-task"); 
const startArea = $("#start-area-list");
const inProgressArea = $("#inProgress-area-list");
const doneArea = $("#done-area-list");
const progressBar = $("#progress-bar");
let totalTasks = 0;
let doneTasks = 0;

taskInput.on("keypress", function(event) {
    if(event.which === 13) {
        addTask();
    }
});
// Uses user input to create a task
const addTask = function () {
    const taskText = $("#add-task").val();
    startArea.append(`<li class="task"><span><i class="fas fa-trash-alt"></i></span>${taskText}</li>`);
    taskInput.val("");
    totalTasks++;
}
// Moves a task from the start area to the inprogress area when clicked
startArea.on("click", "li", function() {
    let startTask = $(this).text();
    $(this).fadeOut(300, function() {
        inProgressArea.append(`<li class="task"><span><i class="fas fa-trash-alt"></i></span>${startTask}</li>`);
        $(this).remove();
        updateProgress();
    })
});
// Deletes a task from the start area when clicked
startArea.on("click", "span", function(event){
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
        totalTasks--;
	});
    event.stopPropagation();
    updateProgress();
});
// Moves a task from the inprogress area to the done area when clicked
inProgressArea.on("click", "li", function() {
    let inProgressTask = $(this).text();
    $(this).fadeOut(300, function() {
        doneArea.append(`<li class="task"><span><i class="fas fa-trash-alt"></i></span>${inProgressTask}</li>`);
        $(this).remove();
        doneTasks++;
        updateProgress();
    })
});
// Deletes a task from the inprogress area when clicked
inProgressArea.on("click", "span", function(event){
	$(this).parent().fadeOut(300,function(){
        $(this).remove();
        totalTasks--;
	});
    event.stopPropagation();
});
// Deletes a task from the done area when clicked
doneArea.on("click", "span", function(event){
	$(this).parent().fadeOut(300,function(){
        $(this).remove();
        totalTasks--;
        doneTasks--;
        updateProgress();
	});
    event.stopPropagation();
});

function updateProgress() {
  let progress = 0;  
  progress = (doneTasks / totalTasks) * 100;
  progressBar.css("width", progress + "%");
  progressBar.text(progress + "%"); 
}