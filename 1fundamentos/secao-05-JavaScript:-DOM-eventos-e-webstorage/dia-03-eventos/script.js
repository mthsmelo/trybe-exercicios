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
  let monthDaysList = document.getElementById("days");

  function createDaysOfTheMonth (){
    for ( let i = 0; i<decemberDaysList.length ; i+=1){
        const daysMonth = decemberDaysList[i];
        const createDays = document.createElement('li')
        createDays.innerHTML=daysMonth

        if (daysMonth=== 4 || daysMonth === 11 || daysMonth === 18){

            createDays.className = "day friday"
            monthDaysList.appendChild(createDays)
        }
        else if (daysMonth===25){

            createDays.className = "day friday holiday"
            monthDaysList.appendChild(createDays)

        }
        else if (daysMonth === 24  || daysMonth === 31) {

            createDays.className = "day holiday"
            monthDaysList.appendChild(createDays)
        }
        else {
            createDays.className = "day"
            monthDaysList.appendChild(createDays)
        }
    }
  }

createDaysOfTheMonth()


function createButton(nomeDoButton) {
    let ondeButtonEsta = document.getElementsByClassName("buttons-container")[0];
    let creatingElementButtom = document.createElement('button');
    creatingElementButtom.id = "btn-holiday";

    ondeButtonEsta.appendChild(creatingElementButtom);
    creatingElementButtom.innerHTML = nomeDoButton;
  }

  createButton("Feriados") 

  function changeHolidayColor() {
    let localizeButton = document.querySelector('#btn-holiday');
    let localizeHolidayClasses = document.querySelectorAll('.holiday');
   
  
    localizeButton.addEventListener('click', function() {
      for (let i = 0; i < localizeHolidayClasses.length; i += 1) {
        if (localizeHolidayClasses[i].style.backgroundColor === "white") {
          localizeHolidayClasses[i].style.backgroundColor = "rgb(238,238,238)";
        } else {
          localizeHolidayClasses[i].style.backgroundColor = "white";
        }
      }
    });
  }
  changeHolidayColor()
  
  function fridayButton (name){
    let  findButtonSpace = document.querySelector(".buttons-container");
    let  creatingFridayButton = document.createElement("button");

    creatingFridayButton.innerHTML = name
    creatingFridayButton.id = "btn-friday"
    findButtonSpace.appendChild(creatingFridayButton)



}
fridayButton("Sexta-feira");


let fridays = document.querySelectorAll(".friday");
let botaoFriday = document.querySelector("#btn-friday");
let decemberFridays = [4 , 11, 18, 25]

function sextouuu (parametro){

    botaoFriday.addEventListener("click" , function(){
        for (let i = 0; i<fridays.length; i+=1){
            if (fridays[i].innerHTML !== "sexta-feira"){
            fridays[i].innerHTML = "sexta-feira"}
            else {
            fridays[i].innerHTML = parametro[i]    
            }    
        }
    })
}
sextouuu(decemberFridays)

let day = document.querySelector('#days');
function zoomIn(){

    day.addEventListener('mouseover',function(event){
        event.target.style.fontSize = "50px";
        event.target.style.fontWeight = '600';
    });

}

function zoomOut(){
 
    day.addEventListener('mouseout',function(event){
    event.target.style.fontSize = "20px"
    event.target.style.fontWeight = '200'
} )}

zoomIn();
zoomOut();
