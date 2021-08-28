var container = document.querySelector('container');
var saveBtn = document.querySelectorAll('.col-sm-1 saveBtn');
var textInput = document.querySelectorAll('.col-sm-10 description');
var currentDate = moment().format("dddd, MMMM Do");
var rowTime = document.querySelectorAll('time-block');


console.log("RV", rowTime);
console.log("CURR", currentDate);


// Create alternating timeblock colors for each day


// Display the current date
document.getElementById('currentDay').innerHTML= currentDate;


function returnText(){
    // let input = document.getElementById("textInput")
    alert("textInput")
}
// var currentTime = moment().format("H");
// Display state: past, present, future

console.log("HELLO");
function changeState() {
    // if (currentDate > columnTime) {
    //     // Changing color green
        
    //     document.getElementById("time").style.backgroundColor = "green";
    // } else {
    //     // Change color red
    //     document.getElementById("time").style.backgroundColor = "red";
    // }
};
// var formatDate = "dddd MMMM Mo";
var formatDate = columnTime;
console.log("TIME", formatDate);
// Change the color of the textarea to indicate state: past(red), present(default color), future(green)
if (currentDate > formatDate) {
    // Changing color green
    
    document.getElementById("time").style.backgroundColor = "green";
} else {
    // Change color red
    document.getElementById("time").style.backgroundColor = "red";
}

// Looping through time blocks
var timeBlock = [...formatDate];
console.log("Block", timeBlock);

// columnTime.forEach(changeState);

// // Store
localStorage.setItem("test", textInput);
// // Retrieve
// // document.getElementById(textInput).innerHTML = localStorage.getItem(textInput);

// Save Btn
// saveBtn.addEventListener("click", returnText());

// Retrieve data and populate from localStorage (save by hour)

