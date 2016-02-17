//Each time the cat picture is clicked, the function increments the number of clicks displayed in countDisplay element.
var count = 0;
countDisplay = document.getElementById("countDisplay");
var elem1 = document.getElementById('catimg1');
var elem2 = document.getElementById('catimg2');
//name the cats
document.getElementById("catimg1Name").innerHTML = "Betty";
document.getElementById("catimg2Name").innerHTML = "Sammy";
//create array of cats' images
var elem = [elem1, elem2];
//iterate through array of images
for (i = 0; i < elem.length; i++) {
	elem[i].addEventListener('click', function(){
	    //the element has been clicked... count the clicks
	    count++;
	    countDisplay.innerHTML = count;
	}, false);
};
//add name for each cat above the image
