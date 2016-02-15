//Each time a cat picture is clicked, the function increments the number of clicks
var count = 0;
countDisplay = document.getElementById("countDisplay");
function clicker(){
	count++;
	countDisplay.innerHTML = count;
}