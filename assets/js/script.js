// Create alternating timeblock colors for each day

// Input text and save to locatStorage
var container = document.querySelector('container');
var saveBtn = document.querySelectorAll('.col-sm-1 saveBtn');
var textInput = document.querySelectorAll('.col-sm-10 description');
var currentDate = moment().format("dddd, MMMM Mo");
var columnTime = document.querySelectorAll('time-block');
// var now = document.querySelector('')
// var description = document.getElementsByClassName('.description');
console.log("CV", columnTime);
console.log("CURR", currentDate);



// Display the current date
var d = new Date();
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
var formatDate = "dddd MMMM Mo";
var formatDate = columnTime;
console.log("TIME", formatDate.length);
if (currentDate > formatDate) {
    // Changing color green
    
    document.getElementById("time").style.backgroundColor = "green";
} else {
    // Change color red
    document.getElementById("time").style.backgroundColor = "red";
}

// columnTime.forEach(changeState);

// // Store
// localStorage.setItem("test", textInput);
// // Retrieve
// // document.getElementById(textInput).innerHTML = localStorage.getItem(textInput);

// Save Btn
// saveBtn.addEventListener("click", returnText());

// Retrieve data and populate from localStorage (save by hour)

