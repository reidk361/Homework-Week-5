
const currentDay = document.getElementById("currentDay");

//Uses moment.js to get the current time. 
currentDay.textContent = (moment().format("MMMM Do YYYY, HH:mm"));

const hourText = document.querySelectorAll(".hour");
const timeBlock = document.querySelectorAll(".time-block");

//Gets the current hour and compares each block to see if you need to make it in the past, present, or future style.
function getCurrentHour(hourElArr, blockArr){
    let currentHour = moment().format("HH");
    for (let i = 0; i < 9; i++) {
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

const hour8 = document.getElementById("hour8");
const hour9 = document.getElementById("hour9");
const hour10 = document.getElementById("hour10");
const hour11 = document.getElementById("hour11");
const hour12 = document.getElementById("hour12");
const hour13 = document.getElementById("hour13");
const hour14 = document.getElementById("hour14");
const hour15 = document.getElementById("hour15");
const hour16 = document.getElementById("hour16");

const saveButton8 = document.getElementById("save-button8");
const saveButton9 = document.getElementById("save-button9");
const saveButton10 = document.getElementById("save-button10");
const saveButton11 = document.getElementById("save-button11");
const saveButton12 = document.getElementById("save-button12");
const saveButton13 = document.getElementById("save-button13");
const saveButton14 = document.getElementById("save-button14");
const saveButton15 = document.getElementById("save-button15");
const saveButton16 = document.getElementById("save-button16");


//Places everything previously saved in those blocks.
hour8.value = localStorage.getItem("hour8");
hour9.value = localStorage.getItem("hour9");
hour10.value = localStorage.getItem("hour10");
hour11.value = localStorage.getItem("hour11");
hour12.value = localStorage.getItem("hour12");
hour13.value = localStorage.getItem("hour13");
hour14.value = localStorage.getItem("hour14");
hour15.value = localStorage.getItem("hour15");
hour16.value = localStorage.getItem("hour16");

//Saves everything in their respective time-block. 
function handleSave(){
    localStorage.setItem("hour8", hour8.value);
    localStorage.setItem("hour9", hour9.value);
    localStorage.setItem("hour10", hour10.value);
    localStorage.setItem("hour11", hour11.value);
    localStorage.setItem("hour12", hour12.value);
    localStorage.setItem("hour13", hour13.value);
    localStorage.setItem("hour14", hour14.value);
    localStorage.setItem("hour15", hour15.value);
    localStorage.setItem("hour16", hour16.value);
}


saveButton8.addEventListener ("click", handleSave);
saveButton9.addEventListener ("click", handleSave);
saveButton10.addEventListener ("click", handleSave);
saveButton11.addEventListener ("click", handleSave);
saveButton12.addEventListener ("click", handleSave);
saveButton13.addEventListener ("click", handleSave);
saveButton14.addEventListener ("click", handleSave);
saveButton15.addEventListener ("click", handleSave);
saveButton16.addEventListener ("click", handleSave);
