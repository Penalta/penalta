const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort (() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
       })
    }

    function resetState(){
        clearStatusClass(document.body)
        nextButton.classList.add('hide')
        while (answerButtonsElement.firstChild){
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
    }

function selectAnswer(e){
    const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
 })
if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
}
else{
    startButton.innerText = 'Reštart'
    startButton.classList.remove('hide')
 }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Ve kterém roce FC Barcelona naposledy vyhrala Ligu Mistru?',
        answers: [
            {text: '2015', correct: true},
            {text: '2012', correct: false},
            {text: '2014', correct: false},
            {text: '2009', correct: false},]
    },
    
{     question: 'Který z tehto polských hráču nehrál za Borusii Dortmund?',
     answers: [
        {text: 'Lewandowski', correct: false},
        {text: 'Szczesny', correct: true},
        {text: 'Piszcek', correct: false},
        {text: 'Blaszczykowski', correct: false},]
},
{     question: 'Ve  kterém roku koupilo PSG Neymara?',
     answers: [
        {text: '2019', correct: false},
        {text: '2018', correct: false},
        {text: '2017', correct: true},
        {text: '2016', correct: false},]
},
{     question: 'Který z tehto polských hráču nehrál za Borusii Dortmund?',
     answers: [
        {text: 'Lewandowski', correct: false},
        {text: 'Szczesny', correct: true},
        {text: 'Piszcek', correct: false},
        {text: 'Blaszczykowski', correct: false},]
},
{     question: 'Kolik ligových titulu má Slovan Bratislava (v ére samostatnosti)?',
     answers: [
        {text: '12', correct: true},
        {text: '15', correct: false},
        {text: '14', correct: false},
        {text: '13', correct: false},]
},
{     question: 'V kterém roce naposled vyhrála Sparta Praha titul?',
     answers: [
        {text: '2014', correct: true},
        {text: '2013', correct: false},
        {text: '2017', correct: false},
        {text: '2015', correct: false},]
},
{     question: 'Který klub nemá mezi trofejemi Ligu Mistru?',
     answers: [
        {text: 'Nottingham Forest', correct: false},
        {text: 'FC Porto', correct: false},
        {text: 'Atletico Madrid', correct: true},
        {text: 'Chelsea', correct: false},]
},
]
