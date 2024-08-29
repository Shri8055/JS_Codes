// first DOM manipulation in HTML
console.dir(document);
document.title="My First DOM"
document.body.style.backgroundColor="Yellow"

// second DOM manipulation
const username="Shrinivas";
const welcomeMsg=document.getElementById("welcome-msg");
welcomeMsg.textContent+=username == "" ? 'Guest' : username;