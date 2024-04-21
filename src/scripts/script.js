let pingDbButton = document.querySelector('.ping-db');
pingDbButton.addEventListener('click', function() {
    pingDb();
});

let pingServerButton = document.querySelector('.ping-server');
pingServerButton.addEventListener('click', function() {
    pingServer();
});

let startWorkoutButton  = document.querySelector('.start-workout'); 
startWorkoutButton.addEventListener('click', function () {
    startNewWorkout();
});

let endWorkoutButton = document.querySelector('.end-workout');
endWorkoutButton.addEventListener('click', function() {
    endWorkout();
});