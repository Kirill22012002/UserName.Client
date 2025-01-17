let serverUrl = 'https://username-eic5.onrender.com';
//let serverUrl = 'http://localhost:5147';
let workoutId = 'workoutId';

function pingServer() {
    fetch(serverUrl + '/Ping')
        .then((response) => response.json())
        .then((json) => {
            let ping = document.querySelector('.ping');
            ping.textContent = json;
        });
}

function pingDb() {
    fetch(serverUrl + '/api/workout/Excercise/GetAllExcercises')
        .then((response) => {
            if (response.status == 200) {
                let pingStatus = document.querySelector('.ping-status');
                pingStatus.textContent = 1;
            }
        });
}

function startNewWorkout() {
    fetch(serverUrl + '/api/workout/StartNewWorkout')
        .then((response) => response.json())
        .then((json) => { 
            localStorage.setItem(workoutId, JSON.stringify(json));
            let startedMessage = document.querySelector('.started-message');
            startedMessage.textContent = 'Ваша тренировка началась, workoutId: ' + JSON.stringify(json);
        });
}

function endWorkout() {
    fetch(serverUrl + '/api/workout/EndWorkout?workoutId=' + localStorage.getItem(workoutId))
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