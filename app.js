const quizForm = document.querySelector('.quiz-form')
const buttonSubmitQuiz = document.querySelector('button')
const scoreContainer = document.createElement('div')

const correctAnswers = ['B', 'C', 'C', 'A']

const showScore = ({score, className}) => {
  scoreContainer.textContent = `Sua pontuação é ${score}`
  scoreContainer.setAttribute('class', className)
  buttonSubmitQuiz.insertAdjacentElement('beforebegin', scoreContainer)
}

quizForm.addEventListener('submit', event => {
  event.preventDefault()
  
  let score = 0
  const userAnswers = [
    quizForm.inputQuestion1.value,
    quizForm.inputQuestion2.value,
    quizForm.inputQuestion3.value,
    quizForm.inputQuestion4.value,
  ]

  userAnswers.forEach( (userAnswer, index )=> {    
    if(userAnswer === correctAnswers[index]) {
      score += 25
    }
  })

    if(score <= 45) {
      showScore({score, className: 'alert alert-danger' })
      return
    } 
    showScore({score, className: 'alert alert-success' })
})
