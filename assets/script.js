
const currentDay = document.getElementById("currentDay");
currentDay.textContent = (moment().format("MMMM Do YYYY, h:mm a"));

const hourText = document.querySelectorAll(".hour");
const timeBlock = document.querySelectorAll(".time-block");
const saveButton = document.getElementById("save-button")

function getCurrentHour(hourElArr, blockArr){
    let currentHour = moment().format("HH");
    console.log(currentHour)
    for (let i = 0; i < 9; i++) {
        console.log(hourElArr[i].textContent)
        if (parseInt(hourElArr[i].textContent) > parseInt(currentHour)){
            blockArr[i].setAttribute("class","row time-block future");
        } else if (parseInt(hourElArr[i].textContent) === parseInt(currentHour)){
            blockArr[i].setAttribute("class","row time-block present");
        } else if ((parseInt(hourElArr[i].textContent) < parseInt(currentHour))){
            blockArr[i].setAttribute("class","row time-block past");
        }
    }
}

getCurrentHour(hourText, timeBlock)

function handleSave(element){
    
}

saveButton.addEventListener ("click", handleSave);