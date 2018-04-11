// main text variables
var text = document.getElementById('output1');
var text2 = document.getElementById('output2');

//achievement text variables
var acheive1 = document.getElementById('a1');
var achieve2 = document.getElementById('a2');
var achieve3 = document.getElementById('a3');
var achieve4 = document.getElementById('a4');
var achieve5 = document.getElementById('a5');
var achieve6 = document.getElementById('a6');

// button variable
var b1 = document.getElementById('button1');

// counter variables
var a = 1;

// adding a click event listener (to the button), from the DOM API
b1.addEventListener('click', clickCounter, false);

// function to be executed when the event listener returns true (a user clicks the button)
function clickCounter() {
    if (a == 1) {
        text.textContent = "You clicked the button!";
        text2.textContent = "Total clicks: " + a;
        
        acheive1.textContent = "Baby Steps (click a total of 1 times)";
        
        a ++;
    } else if (a == 10) {
        text2.textContent = "Total clicks: " + a;
        
        achieve2.textContent = "Getting Your Feet Wet (click a total of 10 times)";
        
        a ++;
    } else if (a == 100) {
        text2.textContent = "Total clicks: " + a;
        
        achieve3.textContent = "Clicking Trainee (click a total of 100 times)";
        
        a ++;
    } else if (a == 1000) {
        text2.textContent = "Total clicks: " + a;
        
        achieve4.textContent = "Clicking Master (click a total of 1,000 times)";
        
        a ++;
    } else if (a == 10000) {
        text2.textContent = "Total clicks: " + a;
        
        achieve5.textContent = "Clicking Addict (Click a total of 10,000 times)";
        
        a++;
    } else if (a == 100000) {
        text2.textContent = "Total clicks: " + a;
        
        achieve6.textContent = "Total Clicking Addict (Click a total of 100,000 times)";
        
        a++;
    } else {
        text.textContent = "You clicked the button, again!";
        text2.textContent = "Total clicks: " + a;
        
        a ++;
    }
    
    a = a;
}
