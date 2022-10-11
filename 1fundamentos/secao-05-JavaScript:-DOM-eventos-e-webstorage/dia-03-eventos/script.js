function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth (){
 const daysOfTheMonth = document.querySelector('#days') 
 for (let i =0 ; i<decemberDaysList.length ; i+=1){
  let createDays = document.createElement('li')
  createDays.innerHTML=decemberDaysList[i]
  createDays.className="day"

  if (decemberDaysList[i]=== 4 || decemberDaysList[i]===11 || decemberDaysList[i]===18 || decemberDaysList[i]===25)[
    createDays.className = "day friday"
  ]
  if (decemberDaysList[i]=== 24 || decemberDaysList[i]===31){
    createDays.className = "day holiday"
  }
  if (decemberDaysList[i]=== 25){
    createDays.className = "day friday holiday"
  }


  daysOfTheMonth.appendChild(createDays)

 }
}

createDaysOfTheMonth()


function createHolidayButton (string){

  const createButton = document.createElement("button")
  createButton.innerHTML = string
  createButton.id = "btn-holiday"
  document.querySelector(".buttons-container").appendChild(createButton)
}

createHolidayButton("Feriados")

function changeHolidaysBackground (){

document.getElementById("btn-holiday").addEventListener("click", function (){

for (let i = 0; i <document.getElementsByClassName('holiday').length ; i+=1){
  if (document.getElementsByClassName('holiday')[i].style.backgroundColor === "white"){
    document.getElementsByClassName('holiday')[i].style.backgroundColor = "rgb(238,238,238)"
  }
  else {
    document.getElementsByClassName('holiday')[i].style.backgroundColor = "white"
  }}
})



}
changeHolidaysBackground()

function createFridayButton(){

  const createButton = document.createElement("button")
  createButton.innerHTML = "Sexta-Feira"
  createButton.id = "btn-friday"
  document.querySelector(".buttons-container").appendChild(createButton)
}


let fridayArray =[4,11,18,25]
createFridayButton()

function changeFridayText (){

  document.getElementById("btn-friday").addEventListener("click", function (){
  
  for (let i = 0; i <document.getElementsByClassName('friday').length ; i+=1){
    if (document.getElementsByClassName('friday')[i].innerHTML !== "Sextou bb"){
      document.getElementsByClassName('friday')[i].innerHTML = "Sextou bb"
    }
    else {
      document.getElementsByClassName('friday')[i].innerHTML = fridayArray[i]
    }}
  }
)}

changeFridayText()


function zoomIn (){
  for (let i = 0 ; i < document.getElementsByClassName('day').length ; i+=1){
    document.getElementsByClassName('day')[i].addEventListener('mouseover', function(){
      document.getElementsByClassName('day')[i].style.fontSize = '40px';
      document.getElementsByClassName('day')[i].style.fontWeight = '700';




      
    })



  }
  }

  zoomIn()


function zoomOut (){
  for (let i = 0 ; i < document.getElementsByClassName('day').length ; i+=1){
    document.getElementsByClassName('day')[i].addEventListener('mouseout', function(){
      document.getElementsByClassName('day')[i].style.fontSize = '20px';
      document.getElementsByClassName('day')[i].style.fontWeight = '200';




      
    })



  }
  }

  zoomOut()

  function createWork(work){
    const criaTarefa = document.createElement("span")
    criaTarefa.innerHTML = work

    document.querySelector(".my-tasks").appendChild(criaTarefa)

  }




  createWork("Fazer os projetos que estão atrasados")

  function createColorWork(cor){
    const criaCor = document.createElement('div')
    criaCor.style.backgroundColor=cor
    document.querySelector('.my-tasks').appendChild(criaCor)
  }

createColorWork('green')


function selectTask (){
  const selecionarTarefa = document.querySelector('.my-tasks').lastChild

  selecionarTarefa.addEventListener('click', function(){
    if (selecionarTarefa.className !== "task selected"){
      selecionarTarefa.className = "task selected"
    }
    else {
      selecionarTarefa.className = "task"
    }
    }
  )
  }


selectTask()


