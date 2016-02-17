//Each time the cat picture is clicked, the function increments the number of clicks displayed in countDisplay element.
var count = 0;
countDisplay = document.getElementById("countDisplay");
var elem = document.getElementById('catimg');
elem.addEventListener('click', function(){
    //the element has been clicked... count the clicks
    count++;
    countDisplay.innerHTML = count;
}, false);