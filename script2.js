var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");
const startButton = document.getElementById('start-btn');
const highscores = document.getElementById('hs-btn');
const submit = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement =  document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const titleInstructions = document.getElementById('title-instructions');
timeleft = 5;
let timeCounter = document.getElementById('time-count');
let timerEl = document.getElementById('card-timer');
let timeTitle = document.getElementById('time-title');




function renderLastRegistered() {
    var password = localStorage.getItem("password");
  
    if (!email || !password) {
      return;
    }
  
  initals.textContent = email;
  userPasswordSpan.textContent = password;
  }
  
  submit.addEventListener("click", function(event) {
    event.preventDefault();
  
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
  
    if (email === "") {
      displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
      displayMessage("error", "Password cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
    localStorage.setItem("email", email);
    localStorage.setItem("password",password);
    renderLastRegistered();
  }
  });