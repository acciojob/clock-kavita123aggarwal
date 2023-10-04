function updateClock(){
	const timerElement = document.getElementById('timer');
	const now = new Date();
	const date = now.toLocaleDateString();
	const time = now.toLocaleTimeString();
	timeElement.textContent = `$(date)$(time)`;
}
setInterval(updateClock, 1000);

updateClock();
