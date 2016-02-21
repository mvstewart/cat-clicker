//Name each cat
var cat1 = "Betty";
var cat2 = "Sammy";
//Each time the cat picture is clicked, the function increments the number of clicks displayed in countDisplay element.
var count = 0;
var countDisplay = document.getElementsByClassName("countDisplay"),
	countLength = countDisplay.length;
var elem1 = document.getElementById('catimg1');
var elem2 = document.getElementById('catimg2');
//name the cats
document.getElementById("catimg1Name").innerHTML = cat1;
document.getElementById("catimg2Name").innerHTML = cat2;
//create array of cats' images
var elem = [elem1, elem2],
	elemlength = elem.length;
//iterate through array of images
for (i = 0; i < elemlength; i++) {
	elem[i].addEventListener('click', function(){
	    //the element has been clicked... count the clicks
	    count++;
	    for (i = 0; i < countLength; i++) {
	    	countDisplay[i].innerHTML = count;
	    };
	}, false);
};