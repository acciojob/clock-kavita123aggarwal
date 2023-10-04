function updateClock() {
    const timerElement = document.getElementById('timer');
    const now = new Date();
    
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    timerElement.textContent = `${date} ${time}`;
}

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();
