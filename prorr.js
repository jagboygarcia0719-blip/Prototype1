let currentCategory = "";

function goToContacts(category, number) {
  currentCategory = category;
  document.getElementById("categoryTitle").innerText = category;
  document.getElementById("contactNumber").innerText = category + ": " + number;
  switchScreen("contacts");
}

function startCall() {
  document.getElementById("callingText").innerText = "Calling " + currentCategory + "...";
  switchScreen("calling");
}

function goHome() {
  switchScreen("home");
}

function switchScreen(screenId) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}
