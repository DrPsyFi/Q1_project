/////////////////////// Variables /////////////////////////////////////////////

const screenA = document.querySelector('.screenA')
const ScreenB = document.querySelector('.screenB')

const answerSelector = document.querySelector('.button_box')
    answerSelector.addEventListener('click', function(event){
      if(event.target.classList.contains('btn') && event.target.id !== "start"){
        let selectedAnswer = event.target.innerHTML
        let selectedId = selectedAnswer.slice(-1)
        updateScore(selectedId)
      }
    })

let questionIndex = 0
let total = 0

const buttons = document.querySelectorAll('.btn')

const start = document.querySelector('#start')
  start.addEventListener('click', (event) => {
      buttons.forEach(function (button) {
        button.classList.remove('hidden')
      })

      start.classList.add('hidden')
      renderQuestion(quiz[0])
    })

///////////////////////////////////////////////////////////////////////////////
///                           Update Score                                 ////
///////////////////////////////////////////////////////////////////////////////

function updateScore(selectedId) {

  let testId = quiz[questionIndex].answer
  if (testId === parseInt(selectedId)) {
    total += 1
    getQuestion()
  }
  else {
    getQuestion()
  }
  return total

}

////////////////////////////////////////////////////////////////////////////////
/////                         Get Next Question                           /////
///////////////////////////////////////////////////////////////////////////////

function getQuestion() {
    questionIndex+= 1
  if (questionIndex <10) {
    renderQuestion(quiz[questionIndex])
  }
  else {
    renderTotal()
  }
}


///////////////////////////////////////////////////////////////////////////////
/////               Render Quiz and Answer options                       /////
///////////////////////////////////////////////////////////////////////////////

function renderQuestion(q) {

  const divQContain = document.querySelector('.question')

  divQContain.innerHTML = ''

  const quesContain = document.createElement('div')
  const question = q.question

  quesContain.innerHTML = question
  divQContain.appendChild(quesContain)
  console.log("are we here?")
  renderOptions(q)

}

function renderOptions(q)  {

  const divOContain = document.querySelector('.options')
  divOContain.classList.remove('hidden')
  divOContain.innerHTML = ''
  const options = document.createElement('ol')

  for(const opt of q.options) {
    const li = document.createElement('li')
    li.innerHTML = `${opt}`
    console.log("what about here?")
    options.appendChild(li)
  }
  testStart = true
  divOContain.appendChild(options)
}

//////////////////////// Render Score /////////////////////////////////////////
function renderTotal() {

  let percentage = total/10 * 100

  const divQContain = document.querySelector('.question')
  divQContain.innerHTML = ''

  const quesContain = document.createElement('div')
  const result = `Congratulations, you got ${percentage}% of the items correct.  You are awesome!`
  quesContain.innerHTML = result

  divQContain.appendChild(quesContain)

  const divOContain = document.querySelector('.options')
  divOContain.innerHTML = ''

  buttons.forEach(function (button) {
    button.classList.add('hidden')
  })
}
