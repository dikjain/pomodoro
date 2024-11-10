const startBtn = document.getElementById('start-btn');
// const resetBtn = document.getElementById('reset-btn');
// const timeDisplay = document.getElementById('time-display');
// const sessionCountDisplay = document.getElementById('session-count');
// const workDurationInput = document.getElementById('work-duration');
// const breakDurationInput = document.getElementById('break-duration');

// let timer;
// let isPomodoro = true;
// let secondsLeft;
// let isRunning = false;
// let completedSessions = 0;

// function updateTime() {
//     const minutes = Math.floor(secondsLeft / 60);
//     const seconds = secondsLeft % 60;
//     timeDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// }

// function startTimer() {
//     if (isRunning) return;
//     isRunning = true;
//     startBtn.textContent = 'Pause';
//     resetBtn.disabled = true;

//     timer = setInterval(() => {
//         secondsLeft--;
//         updateTime();

//         if (secondsLeft <= 0) {
//             clearInterval(timer);
//             isRunning = false;
//             resetBtn.disabled = false;

//             audio.play();

//             if (isPomodoro) {
//                 alert('Pomodoro session over! Take a break!');
//                 completedSessions++;
//                 sessionCountDisplay.textContent = completedSessions;
//                 secondsLeft = breakDurationInput.value * 60;
//             } else {
//                 alert('Break time is over! Time to work!');
//                 secondsLeft = workDurationInput.value * 60;
//             }
//             isPomodoro = !isPomodoro;
//         }
//     }, 1000);
// }

// function resetTimer() {
//     clearInterval(timer);
//     isRunning = false;
//     startBtn.textContent = 'Start';
//     resetBtn.disabled = false;
//     secondsLeft = workDurationInput.value * 60;
//     updateTime();
// }

// startBtn.addEventListener('click', () => {
//     if (isRunning) {
//         clearInterval(timer);
//         isRunning = false;
//         startBtn.textContent = 'Start';
//         resetBtn.disabled = false;
//     } else {
//         startTimer();
//     }
// });

// resetBtn.addEventListener('click', resetTimer);

// secondsLeft = workDurationInput.value * 60;
// updateTime();

