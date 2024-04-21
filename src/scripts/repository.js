const SERVER_URL = import.meta.env.SERVER_URL;
let testSpan  = document.querySelector('.test-span'); 
testSpan.textContent = SERVER_URL;
//let serverUrl = 'http://localhost:5147';
let workoutId = 'workoutId';

function startNewWorkout() {
    fetch(SERVER_URL + '/api/workout/StartNewWorkout')
        .then((response) => response.json())
        .then((json) => { 
            localStorage.setItem(workoutId, JSON.stringify(json));
            let startedMessage = document.querySelector('.started-message');
            startedMessage.textContent = 'Ваша тренировка началась, workoutId: ' + JSON.stringify(json);
        });
}

function endWorkout() {
    fetch(SERVER_URL + '/api/workout/EndWorkout?workoutId=' + localStorage.getItem(workoutId))
        .then((response) => {
            let status = response.status;
            let endedMessage = document.querySelector('.ended-message');
            if (status == 200) {
                endedMessage.textContent = 'Ваша тренировка завершена успешно';
            }
            else {
                endedMessage.textContent = 'Ошибка при завершении тренировки';
            }
        });
}