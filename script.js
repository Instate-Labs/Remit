// Clock function to display current time
function updateClock() {
    console.log('updateClock called at:', new Date().toLocaleTimeString()); // Debug log
    const now = new Date();
    
    // Format time for 12-hour display (10:30 AM)
    const timeOptions = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // Format date (29 August 2025, Friday)
    const dateOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
    };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    
    // Format time for 24-hour display (10:20)
    const time24Options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const time24String = now.toLocaleTimeString('en-US', time24Options);
    
    // Update the clock elements
    const s1TimeElement = document.getElementById('current-time');
    const s1DateElement = document.getElementById('current-date');
    const clockElement = document.querySelector('.clock b');
    
    if (s1TimeElement) {
        s1TimeElement.textContent = timeString;
        console.log('Updated time to:', timeString); // Debug log
    } else {
        console.log('Could not find s1 time element'); // Debug log
    }
    
    if (s1DateElement) {
        s1DateElement.textContent = dateString;
    }
    
    if (clockElement) {
        clockElement.textContent = time24String;
    }
}

// Initialize clock when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateClock(); // Update immediately
    setInterval(updateClock, 1000); // Update every second
});

// Timer/Stopwatch variables
let timerInterval = null;
let timerStartTime = null;
let timerPaused = false;
let pausedElapsed = 0;

// Timer functionality
function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerStartTime = Date.now() - pausedElapsed;
    timerPaused = false;
    
    timerInterval = setInterval(updateTimer, 10); // Update every 10ms for precision
}

function updateTimer() {
    if (!timerPaused) {
        const elapsed = Date.now() - timerStartTime;
        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        const milliseconds = Math.floor((elapsed % 1000) / 10);
        
        const timerDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
        
        // Update timer display element if it exists
        const timerElement = document.getElementById('timer-display');
        if (timerElement) {
            timerElement.textContent = timerDisplay;
        }
    }
}

function pauseTimer() {
    if (timerInterval && !timerPaused) {
        timerPaused = true;
        pausedElapsed = Date.now() - timerStartTime;
    } else if (timerPaused) {
        timerPaused = false;
        timerStartTime = Date.now() - pausedElapsed;
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerStartTime = null;
        timerPaused = false;
        pausedElapsed = 0;
        
        const timerElement = document.getElementById('timer-display');
        if (timerElement) {
            timerElement.textContent = '00:00.00';
        }
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'p') {
        pauseTimer();
    } else if (e.key.toLowerCase() === 's') {
        stopTimer();
    }
});

let hourTitle = document.getElementById('hour');
let input = document.getElementById('input');
let originalText = '';
let currentTitle = null;

// Click title to edit
hourTitle.onclick = function() {
    originalText = hourTitle.textContent;
    currentTitle = hourTitle;
    input.value = originalText;
    hourTitle.classList.add('hidden');
    input.classList.remove('hidden');
    input.focus();
    input.select();
};

// Save on Enter, cancel on Escape
input.onkeydown = function(e) {
    if (e.key === 'Enter') {
        save();
    } else if (e.key === 'Escape') {
        cancel();
    }
};

// Save when clicking outside
input.onblur = function() {
    save();
};

function save() {
    if (input.value.trim() && currentTitle) {
        currentTitle.textContent = input.value.trim();
        // Start timer when saving input
        startTimer();
    }
    showTitle();
}

function cancel() {
    if (currentTitle) {
        currentTitle.textContent = originalText;
    }
    showTitle();
}

function showTitle() {
    input.classList.add('hidden');
    if (currentTitle) {
        currentTitle.classList.remove('hidden');
    }
    currentTitle = null;
}








// Minute title editing
let minuteTitle = document.getElementById('minute');
let input2 = document.getElementById('input2');
let originalText2 = '';
let currentTitle2 = null;

// Click title to edit
minuteTitle.onclick = function() {
    originalText2 = minuteTitle.textContent;
    currentTitle2 = minuteTitle;
    input2.value = originalText2;
    minuteTitle.classList.add('hidden');
    input2.classList.remove('hidden');
    input2.focus();
    input2.select();
};

// Save on Enter, cancel on Escape
input2.onkeydown = function(e) {
    if (e.key === 'Enter') {
        save();
    } else if (e.key === 'Escape') {
        cancel();
    }
};

// Save when clicking outside
input2.onblur = function() {
    save();
};

function save() {
    if (input2.value.trim() && currentTitle2) {
        currentTitle2.textContent = input2.value.trim();
        // Start timer when saving input
        startTimer();
    }
    showTitle();
}

function cancel() {
    if (currentTitle2) {
        currentTitle2.textContent = originalText2;
    }
    showTitle();
}

function showTitle() {
    input2.classList.add('hidden');
    if (currentTitle2) {
        currentTitle2.classList.remove('hidden');
    }
    currentTitle = null;
}

