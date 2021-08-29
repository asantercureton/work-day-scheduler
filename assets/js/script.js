var container = document.querySelector('container');
var saveBtn = document.querySelectorAll('.col-sm-1 saveBtn');
var textInput = document.querySelectorAll('.col-sm-10 description');
var currentDate = moment().format("dddd, MMMM Do");
// var rowTime = document.getElementsByClassName('time-block').childElementCount;
var rowTime = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var rowArray = document.getElementsByClassName('col-sm-1 hour')[0];

// LOOP
for (var i = 0; i < rowTime.length; i++) {

    time = rowTime[i];
    // Current time AM/PM
    var now = new moment();
    console.log("hA", now.format("hA"));
    console.log("rowTime", rowTime);
    // Change state of textarea
    if (now.format("hA") > rowTime) {

        // Changing color green
        // console.log(rowArray.innerHTML, now.format("hA"));

        document.getElementById("time").style.backgroundColor = "green";
    } else {
        // Change color red
        document.getElementById("time").style.backgroundColor = "red";
    }
}

// Display the current date
document.getElementById('currentDay').innerHTML = currentDate;


// function returnText(){
//     // let input = document.getElementById("textInput")
//     alert("textInput")
// }

// console.log("rowArray", rowArray.innerHTML);

console.log(rowTime);

// console.log("HELLO");
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
// console.log("TIME", rowTime);
// Change the color of the textarea to indicate state: past(red), present(default color), future(green)

// Looping through time blocks
// var timeBlock = [...rowTime];
// console.log("Block", timeBlock);

// columnTime.forEach(changeState);

// // Store
localStorage.setItem("test", textInput);
// // Retrieve
// // document.getElementById(textInput).innerHTML = localStorage.getItem(textInput);

// Save Btn
// saveBtn.addEventListener("click", returnText());

// Retrieve data and populate from localStorage (save by hour)

