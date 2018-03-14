
const screenA = document.querySelector('.screenA')

const start = document.querySelector('#start')
  document.addEventListener('click', (event) => {

      start.classList.toggle('d-none')
      startQuiz(start)
    })

const ScreenB = document.querySelector('.screenB')
const quesContain= document.querySelector('#question')
const ansAContain= document.querySelector('answerA')
const ansBContain= document.querySelector('answerB')
const ansCContain= document.querySelector('answerC')
const ansDContain= document.querySelector('answerD')

function startQuiz(button) {
console.log(
let question = `1. ${quiz[0].question}`
let answerA = `A.  ${quiz[0].options[0]}`
let answerB = `B.  ${quiz[0].options[1]}`
let answerC = `C.  ${quiz[0].options[2]}`
let answerD = `D.  ${quiz[0].options[3]}`)
  // renderQuiz(question, answerA, answerB, answerC, answerD)
}



//
// function renderQuiz(question, answerA, answerB, answerC, answerD) {
//
//   screenA.innerHTML = {
//   quesContain.innerHTML = question
//   ansAContain.innerHTML = answerA
//   ansBContain.innerHTML = answerB
//   ansCContain.innerHTML = answerC
//   ansDContain.innerHTML = answerD
// }
