// Create alternating timeblock colors for each day

// Input text and save to locatStorage
var container = document.querySelector('container');
var saveBtn = document.querySelectorAll('.col-sm-1 saveBtn');
var textInput = document.querySelectorAll('.col-sm-10 description');
var currentDate = moment().format("dddd, MMMM Mo");
var now = Date.now();
// var description = document.getElementsByClassName('.description');

console.log("CURR", currentDate);



// Display the current date
var d = new Date();
document.getElementById('currentDay').innerHTML= currentDate;


function returnText(){
    // let input = document.getElementById("textInput")
    alert("textInput")
}

// Display state: past, present, future
if (currentDate > now) {
    // Changing color green
    document.getElementById("col-sm-10").style.backgroundColor = "green";
} else {
    // Change color red
    document.getElementById("col-sm-10").style.backgroundColor = "red";
}
// // Store
// localStorage.setItem("test", textInput);
// // Retrieve
// // document.getElementById(textInput).innerHTML = localStorage.getItem(textInput);

// Save Btn
// saveBtn.addEventListener("click", returnText());

// Retrieve data and populate from localStorage (save by hour)

