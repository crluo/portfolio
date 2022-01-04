// Gets the modals
let currentModal;
let aboutModal = document.getElementById("about");
let resumeModal = document.getElementById("resume");
let projectsModal = document.getElementById("projects");

// Get the button that opens the modal
let aboutBtn = document.getElementById("about-btn");
let resumeBtn = document.getElementById("resume-btn");
let projectsBtn = document.getElementById("projects-btn");

// Get the <span> element that closes the modal
let spans = document.getElementsByClassName("close");

for ( let span of spans ) {
    span.onclick = function() {
        currentModal.style.display = "none";
    }
}

// When the user clicks on the button, open the modal
aboutBtn.onclick = function() {
    aboutModal.style.display = "block";
    currentModal = aboutModal;
}
resumeBtn.onclick = function() {
    resumeModal.style.display = "block";
    currentModal = resumeModal;
}
projectsBtn.onclick = function() {
    projectsModal.style.display = "block";
    currentModal = projectsModal;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == currentModal) {
    currentModal.style.display = "none";
  }
}