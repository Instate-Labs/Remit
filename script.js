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

// need a function such that if i press p it pauses the timer


        let title = document.getElementById('title');
        let input = document.getElementById('input');
        let originalText = '';
        
        // Click title to edit
        title.onclick = function() {
            originalText = title.textContent;
            input.value = originalText;
            title.classList.add('hidden');
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
            if (input.value.trim()) {
                title.textContent = input.value.trim();
            }
            showTitle();
        }
        
        function cancel() {
            title.textContent = originalText;
            showTitle();
        }
        
        function showTitle() {
            input.classList.add('hidden');
            title.classList.remove('hidden');
        }