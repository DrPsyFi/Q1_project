
/////////////////////// Variables /////////////////////////////////////////////

const screenA = document.querySelector('.screenA')
const ScreenB = document.querySelector('.screenB')
let questionIndex = 0
let total = 0


///////////////////////////////////////////////////////////////////////////////
////                          Local Storage                             ///////
///////////////////////////////////////////////////////////////////////////////

  if (window.localStorage){
    const parsedIndex = JSON.parse(localStorage.getItem('currentIndex'))
    const parsedTotal = JSON.parse(localStorage.getItem('currentTotal'))
    if(parsedIndex && parsedTotal) {
      let currentIndex = Number(localStorage.getItem('currentIndex'))
      let currentTotal = Number(localStorage.getItem('currentTotal'))
        questionIndex = currentIndex
        total = currentTotal
        renderQuestion(stQuiz[currentIndex])
    }

  }

//////////////////////////////////////////////////////////////////////////////
////////            Start Button and Event Listener                   ////////
/////////////////////////////////////////////////////////////////////////////


const buttons = document.querySelectorAll('.btn')

//const name = document.querySelector('#name');

const start = document.querySelector('#start')
  start.addEventListener('click', (event) => {

      buttons.forEach(function (button) {
        button.classList.remove('hidden')
      })
      start.classList.add('hidden')
      renderQuestion(stQuiz[questionIndex])
    })
//var name = document.getElementById('#name').value;

  //   if(!name.value) {
  //     alert("Please enter a User Name to continue.")
  //     location.reload()
  //   }
  //
  // })


///////////////////////////////////////////////////////////////////////////////
////////     Answer Selector Event Listener                              //////
///////////////////////////////////////////////////////////////////////////////


const answerSelector = document.querySelector('.button_box')
  answerSelector.addEventListener('click', function(event){
    console.log('Hi')
    if(event.target.classList.contains('btn') && event.target.id !== "start"){
      let selectedAnswer = event.target.innerHTML
      let selectedId = selectedAnswer.slice(-1)
      updateScore(selectedId)
    }
})


///////////////////////////////////////////////////////////////////////////////
///                           Update Score                                 ////
///////////////////////////////////////////////////////////////////////////////

function updateScore(selectedId) {
  console.log('yo')
  let testId = stQuiz[questionIndex].answer
  console.log(testId)
  if (testId === parseInt(selectedId)) {
    console.log(true)
    total =  total + 1
    localStorage.setItem('currentTotal', total)
    getQuestion()
    return total
  }
  getQuestion()
}


////////////////////////////////////////////////////////////////////////////////
/////                         Get Next Question                           /////
///////////////////////////////////////////////////////////////////////////////

function getQuestion() {
  console.log('dabba doo')
    questionIndex+= 1
    localStorage.setItem('currentIndex', questionIndex)
  if (questionIndex <10) {
    renderQuestion(stQuiz[questionIndex])
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

    options.appendChild(li)
  }

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
  divOContain.innerHTML = 'If you want to try again hit submit below.'

  buttons.forEach(function (button) {
    button.classList.add('hidden')
  })
  localStorage.setItem('currentIndex', 0)
  localStorage.setItem('currentTotal', 0)
  anotherTime()

}

function anotherTime () {
  let buttonBox = document.querySelector('.button_box')
  let playAgain = document.createElement('button')
    playAgain.innerHTML= 'Submit'
    playAgain.classList.add('btn-danger')
    playAgain.classList.add('btn')
    playAgain.addEventListener('click', event => {
      location.reload()
    })


  buttonBox.appendChild(playAgain)
}

function renderReset (){
  questionIndex = 0
  total = 0
}
