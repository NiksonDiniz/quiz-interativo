const form = document.querySelector('.quiz-form')
const button = document.querySelector('button')

const divScore = document.createElement('div')

const correctAnswers = ['B', 'C', 'C', 'A']

const insertDivScore = insertDivScoreInfo => {
  const {text, className, previousSibling} = insertDivScoreInfo

  divScore.textContent = text
  divScore.setAttribute('class', className)
  previousSibling.insertAdjacentElement('beforebegin', divScore)
}

form.addEventListener('submit', event => {
  event.preventDefault()
  
  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  userAnswers.forEach( (userAnswer, index )=> {
    
    if(userAnswer === correctAnswers[index]) {
      score += 25
    }

    const badScore = {
      text: `Sua pontuação é ${score}`,
      className: 'alert alert-danger',
      previousSibling: button
    }

    const goodScore = {
      text: `Sua pontuação é ${score}`,
      className: 'alert alert-success',
      previousSibling: button
    }

    if(score <= 45) {
      insertDivScore(badScore)
      // divScore.textContent = `Sua pontuação é ${score}`
      // divScore.setAttribute('class', 'alert alert-danger')
      // button.insertAdjacentElement('beforebegin', divScore)
      return
    } 
    insertDivScore(goodScore)
    // divScore.textContent = `Sua pontuação é ${score}`
    // divScore.setAttribute('class', 'alert alert-success')
    // button.insertAdjacentElement('beforebegin', divScore)
  })
})
