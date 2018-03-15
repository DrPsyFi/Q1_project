/////////////////////// Variables /////////////////////////////////////////////

const screenA = document.querySelector('.screenA')
const ScreenB = document.querySelector('.screenB')
const answerSelector = document.querySelector('.button_box')
    answerSelector.addEventListener('click', updateScore)

let questionIndex = 0
let total = 0
//let percentage = total/10 * 100


//
// const start = document.querySelector('#start')
//   document.addEventListener('click', (event) => {
//
//       start.classList.toggle('d-none')
//       startQuiz(start)
//     })

///////////////////////////////////////////////////////////////////////////////
///                           Update Score                                 ////
///////////////////////////////////////////////////////////////////////////////

function updateScore(e) {
  let selectedAnswer = e.target.innerHTML
  let selectedId = selectedAnswer.slice(-1)
  let testId = quiz[questionIndex].answer
  if (testId === parseInt(selectedId)) {
    total += 1
    getQuestion(e)
  }
  else {
    getQuestion(e)
  }
  return total

}

////////////////////////////////////////////////////////////////////////////////
/////                         Get Next Question                           /////
///////////////////////////////////////////////////////////////////////////////

function getQuestion(e) {
    questionIndex+= 1
  if (questionIndex <10) {
    renderQuestion(quiz[questionIndex])
  }
  else {
    renderTotal(e)
  }
}


///////////////////////////////////////////////////////////////////////////////
/////               Render Quiz and Answer options                       /////
///////////////////////////////////////////////////////////////////////////////

renderQuestion(quiz[0])

function renderQuestion(q) {
  const divQContain = document.querySelector('.question')
  divQContain.innerHTML = ''
  const quesContain = document.createElement('div')
  const question = q.question

  quesContain.innerHTML = question
  divQContain.appendChild(quesContain)
  renderOptions(q)

}

function renderOptions(q)  {
  const divOContain = document.querySelector('.options')
  divOContain.innerHTML = ''
  const options = document.createElement('ol')

  for(const opt of q.options) {
    const li = document.createElement('li')
    li.innerHTML = opt
    options.appendChild(li)
  }

  divOContain.appendChild(options)
}

//////////////////////// Render Score /////////////////////////////////////////
function renderTotal(e) {

  let percentage = total/10 * 100


  const divQContain = document.querySelector('.question')
  divQContain.innerHTML = ''

  const divOContain = document.querySelector('.options')
  divOContain.innerHTML = ''
  divQContain.innerHTML = `Congratulations, you got ${percentage}%.  You are awesome!`
}
