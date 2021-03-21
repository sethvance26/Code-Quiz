const startButton = document.getElementById('start-btn');
const highscores = document.getElementById('hs-btn');
const submit = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement =  document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const titleInstructions = document.getElementById('title-instructions');
timeleft = 55; //This variable counts how many seconds are left until the game ends. 
let timeCounter = document.getElementById('time-count');
let timerEl = document.getElementById('card-timer');
let timeTitle = document.getElementById('time-title');

// Above are the global variables we used.

let countRightAnswers =0; //This sets the starting value for checking our answers to zero, and it will go up with every right answer.
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame) // here we're listening for a click on the start button to run the startgame function.
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
//This is the function that causes the timer to count down and display a message if time runs out.
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
 

//This function starts the game once user clicks Start button
function startGame() {
    timer();
    countRightAnswers =0;
    startButton.classList.add('hide') //This addes the hide class to the start button after it has been clicked. (Making it hide.)
    titleInstructions.classList.add('hide') //This hides the title and instructions so questions will appear in their place.
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide') //This makes the questions and answers display by un-hiding the question container.
    setNextQuestion() 
}



function setNextQuestion() { // this functions shuffles the questions randomly. 
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

function showQuestion(question) { //This function is to display the questions and answers. 
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
//This function is for adding a score if the player gets the answer correct. 
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
        countRightAnswers++; 
      }
    
      
      document.getElementById('right-answers').innerHTML = countRightAnswers; 
    
      document.getElementById('answer-buttons').classList.add('no-click'); 
      
    }
    
    

function setStatusClass(element, correct) { //This function is verification for if the answers are correct or incorrect.
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
//Below we made Javascript objects for our questions and answers.
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


      