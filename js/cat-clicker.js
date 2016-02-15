//Each time the cat picture is clicked, the function increments the number of clicks displayed in countDisplay element.
var count = 0;
countDisplay = document.getElementById("countDisplay");
function clicker(){
	count++;
	countDisplay.innerHTML = count;
}