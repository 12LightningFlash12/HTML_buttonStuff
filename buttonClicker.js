// main text variables
var txt1 = document.getElementById('output1');
var total = document.getElementById('totalClicks');

// informtion text variables
var cursors = document.getElementById('totalCursors');
var totalPoints = document.getElementById('totalPoints');

// cost text variables
var add1Cost = document.getElementById('cost1');
var add5Cost = document.getElementById('cost2');
var add10Cost = document.getElementById('cost3');
var add25Cost = document.getElementById('cost4');
var add50Cost = document.getElementById('cost5');
var add100Cost = document.getElementById('cost6');
var add500Cost = document.getElementById('cost7');
var add1000Cost = document.getElementById('cost8');

// button varable(S)
var mainButton = document.getElementById('buttonMain');
var add1Button = document.getElementById('add1');
var add5Button = document.getElementById('add5');
var add10Button = document.getElementById('add10');
var add25Button = document.getElementById('add25');
var add50Button = document.getElementById('add50');
var add100Button = document.getElementById('add100');
var add500Button = document.getElementById('add500');
var add1000Button = document.getElementById('add1000');

// price variables
var a1 = 15, a5 = 75, a10 = 150, a25 = 375, a50 = 750, a100 = 1500, a500 = 7500, a1000 = 15000;

// other variables
var a = 0, diff = 1, clicks = 0, numCursors = 1, totalButtonPoints = 0, times = 0;


// adding an event listener, to the button(s)
mainButton.addEventListener('click', mainAction, false);
add1Button.addEventListener('click', add1, false);
add5Button.addEventListener('click', add5, false);
add10Button.addEventListener('click', add10, false);
add25Button.addEventListener('click', add25, false);
add50Button.addEventListener('click', add50, false);
add100Button.addEventListener('click', add100, false);
add500Button.addEventListener('click', add500, false);
add1000Button.addEventListener('click', add1000, false);

// the main part of the game
function mainAction() {
    a += diff;
    clicks ++;
    totalButtonPoints += diff;
    
    txt1.textContent = "Button Points: " + a;
    total.textContent = "Total Clicks: " + clicks;
    totalPoints.textContent = "Total Button Points: " + totalButtonPoints;
}

// when the player clicks the 'Add 1 Cursor' button
function add1() {
    times = Math.floor(a / a1);
    
    if (times > 0) {
        a -= a1;
        diff += 1;
        numCursors += 1;
        a1 = Math.ceil(a1 * 1.2);
        
        txt1.textContent = "Button Points: " + a;
        cursors.textContent = "Total Cursors: " + numCursors;
        add1Cost.textContent = "Add 1 Cost: " + a1;
        
        alert("You purchased a cursor!");
    } else {
        alert("You cannot buy that modifyer!");
    }
    
    diff = diff;
    a1 = a1;
}

// when the player clicks the 'Add 5 Cursors' button
function add5() {
    times = Math.floor(a / a5);
    
    if (times > 0) {
        a -= a5;
        diff +=5;
        numCursors += 5;
        a5 = Math.ceil(a5 * 1.2);
        
        txt1.textContent = "Button Points: " + a;
        cursors.textContent = "Total Cursors: " + numCursors;
        add5Cost.textContent = "Add 5 Cost: " + a5;
        
        alert("You bought 5 cursors!");
    } else {
        alert("You cannot buy that modifyer!");
    }
    
    diff = diff;
    a5 = a5;
}

// when the player clicks the 'Add 10 Cursors' button
function add10() {
    times = Math.floor(a / a10);
    
    if (times > 0) {
        a -= a10;
        diff += 10;
        numCursors += 10;
        a10 = Math.ceil(a10 * 1.2);
        
        txt1.textContent = "Button Points: " + a;
        cursors.textContent = "Total Cursors: " + numCursors;
        add10Cost.textContent = "Add 10 Coast: " + a10;
        
        alert("You bought 10 cursors!");
    } else {
        alert("You cannot buy that modifyer!");
    }
    
    diff = diff;
    a10 = a10;
}

// when the player clicks the 'Add 10 Cursors' button
function add25() {
    times = Math.floor(a / a25);
    
    if (times > 0) {
        a -= a25;
        diff += 25;
        numCursors += 25;
        a25 = Math.ceil(a25 * 1.2);
        
        txt1.textContent = "Button Points: " + a;
        cursors.textContent = "Total Cursors: " + numCursors;
        add25Cost.textContent = "Add 25 Cost: " + a25;
        
        alert("You bought 25 cursors!");
    } else {
        alert("You cannot buy that modifyer!");
    }
    
    diff = diff;
    a25 = a25;
}

// when the player clicks the 'Add 50 Cursors' button
function add50() {
    times = Math.floor(a / a50);
    
    if (times > 0) {
        a -= a50;
        diff += 50;
        numCursors += 50;
        a50 = Math.ceil(a50 * 1.2);
        
        txt1.textContent = "Button Points: " + a;
        cursors.textContent = "Total Cursors: " + numCursors;
        add50Cost.textContent = "Add 50 Cost: " + a50;
        
        alert("You bought 50 cursors!");
    } else {
        alert("You cannot buy that modifyer!");
    }
    
    diff = diff;
    a50 = a50;
}

// when the player clicks the 'Add 100 Cursors' button
function add100() {
    times = Math.floor(a / a100);
    
    if (times > 0) {
        a -= a100;
        diff += 100;
        numCursors += 100;
        a100 = Math.ceil(a100 * 1.2);
        
        txt1.textContent = "Button Points: " + a;
        cursors.textContent = "Total Cursors: " + numCursors;
        add100Cost.textContent = "Add 100 Coat: " + a100;
        
        alert("You bought 100 cursors!");
    } else {
        alert("You cannot buy that modifyer!");
    }
    
    diff = diff;
    a100 = a100;
}

// when the player clicks the 'Add 500 Cursors' button
function add500() {
    times = Math.floor(a / a500);
    
    if (times > 0) {
        a -= a500;
        diff += 500;
        numCursors += 500;
        a500 = Math.ceil(a500 * 1.2);
        
        txt1.textContent = "Button Points: " + a;
        cursors.textContent = "Total Cursors: " + numCursors;
        add500Cost.textContent = "Add 500 Cost: " + a500;
        
        alert("You bought 500 cursors!");
    } else {
        alert("You cannot buy that modifyer!");
    }
    diff = diff;
    a500 = a500;
}

// when the player clicks the 'Add 1000 Cursors' button
function add1000() {
    times = Math.floor(a / a1000);
    
    if (times > 0) {
        a -= a1000;
        diff += 1000;
        numCursors += 1000;
        a1000 = Math.ceil(a1000 * 1.2);
        
        txt1.textContent = "Button Points: " + a;
        cursors.textContent = "Total Cursors: " + numCursors;
        add1000Cost.textContent = "Add 1000 Coat: " + a1000;
        
        alert("You bought 1000 cursors!");
    } else {
        alert("You cannot buy that modifyer!");
    }
    
    diff = diff;
    a1000 = a1000;
}
