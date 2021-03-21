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



let countRightAnswers =0;
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function timer() {
    var countDown = setInterval(function() {
      timeleft--;
      timeCounter.textContent = timeleft;
  
      if (timeleft <=0) {
        clearInterval(countDown);
        timeTitle.classList.add('hide');
        timeCounter.textContent = "You ran out of time, please try again";
      }
      
    }, 1000);
  }
 


function startGame() {
    timer();
    countRightAnswers =0;
    startButton.classList.add('hide')
    titleInstructions.classList.add('hide') 
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}



function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
     answerButtonsElement.removeChild
     (answerButtonsElement.firstChild)
    }   
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
      startButton.innerText='Restart'
      highscores.classList.remove('hide')
      
    }

    if (selectedButton.dataset = correct) {
        countRightAnswers++; //+1
      }
    
      //5. to show the score inside <span>
      document.getElementById('right-answers').innerHTML = countRightAnswers; 
    //   document.getElementById('answers-percent').innerHTML = ((100 * countRightAnswers)/questions.length).toFixed(0);
      //prevent multiclicking 
      document.getElementById('answer-buttons').classList.add('no-click'); 
      
    }
    
    

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question: 'What tag is used to define a container for an external app or plug-in?',
        answers: [
            { text: '<embed>', correct: true},
            { text: '<caption>', correct: false},
            { text: '<h1>', correct: false},
            { text: '<p>', correct: false}
        ]   
    },
    {
        question: 'What is the most used programming language?',
        answers: [
            { text: 'Javascript', correct: true},
            { text: 'HTML', correct: false},
            { text: 'Roblox', correct: false},
            { text: 'Python', correct: false}
        ]   
    },
    {
        question: 'What are people who write computer code called?',
        answers: [
            { text: 'Brogrammers', correct: false},
            { text: 'Professors', correct: false},
            { text: 'Programmers', correct: true},
            { text: 'Cryptographers', correct: false}
        ]   
    },
    {
        question: 'What is computer coding?',
        answers: [
            { text: 'A radio show', correct: false },
            { text: 'A list of functions', correct: false },
            { text: 'A TV show', correct: false },
            { text: 'Telling a computer what to do', correct: true }
        ]
    }]


    function renderLastRegistered() {
        var email = localStorage.getItem("email");
        var password = localStorage.getItem("password");
      
        if (!email || !password) {
          return;
        }
      
      userEmailSpan.textContent = email;
      userPasswordSpan.textContent = password;
      }
      
      signUpButton.addEventListener("click", function(event) {
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
      