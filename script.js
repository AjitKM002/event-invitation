let dialog = document.getElementById("errorMessage");
let form = document.getElementById("eventForm");
let inviteCard = document.getElementById("inviteCard");
let closeButton = document.getElementById("close-error");

function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours));
    time.setMinutes(parseInt(minutes));
    return time.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

closeButton.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let eName = document.getElementById("eventName").value;
    let eDate = document.getElementById("eventDate").value;
    let sTime = document.getElementById("startTime").value;
    let eTime = document.getElementById("endTime").value;
    let description = document.getElementById("description").value;
    let location = document.getElementById("location").value;

    if(!eName || !eDate || !sTime || !eTime || !description || !location) {
        dialog.showModal();
        return;
    }

    document.getElementById("displayEventName").textContent = eName;
    document.getElementById('displayDateTime').textContent = 
        `${formatDate(eDate)}\n${formatTime(sTime)} - ${formatTime(eTime)}`;
    document.getElementById("displayLocation").textContent = location;
    document.getElementById("displayDescription").textContent = description;

    document.getElementById("formContainer").style.display = "none";
    document.getElementById("inviteCard").style.display = "block";
    document.getElementById("sideContent").style.textAlign="left";

});