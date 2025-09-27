function updateClock() {
    const now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    // Add leading zeros
    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    // Format time string
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Update clock display
    document.getElementById('clock').textContent = timeString;

    // Update date display
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("toggleTheme").textContent =
        document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});