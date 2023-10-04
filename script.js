function updateClock(){
	const timerElement = document.getElementById('timer');
	const now = newDate();
	const date = now.toLocaleDateString();
	const time = now.toLocaleTimeString();
	timeElement.textContent = `$(date)$(time)`;
}
setInterval(()=>{
	
}, 1000);

updateClock();
