
let startWorkoutButton  = document.querySelector('.start-workout'); 
startWorkoutButton.addEventListener('click', function () {
    startNewWorkout();
});

let endWorkoutButton = document.querySelector('.end-workout');
endWorkoutButton.addEventListener('click', function() {
    endWorkout();
});