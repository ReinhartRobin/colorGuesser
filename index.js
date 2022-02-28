window.onload = function () {
    document.getElementsByClassName("colorContent")[0].style.visibility = "hidden";
    document.getElementsByClassName("colorContent")[1].style.visibility = "hidden";
    document.getElementsByClassName("colorContent")[2].style.visibility = "hidden";
}

var redValueR;
var greenValueR;
var blueValueR;
var redValue1;
var greenValue1;
var blueValue1;
var rightOne;
var highscore = 0;
var playing = false;

function startGame() {
    changeVisibility();
    rightOne = getRandomNumber(0, 2);
    initValues();
    initColors();
    console.log(rightOne);
    document.getElementById("gui").innerHTML = `
    <h3>rgb(`+ redValueR + `, ` + greenValueR + `, ` + blueValueR + `)</h3>
    `;
    playing = true;
}

function resume() {
    rightOne = getRandomNumber(0, 2);
    initValues();
    initColors();
    console.log(rightOne);
    document.getElementById("gui").innerHTML = `
        <h3>rgb(`+ redValueR + `, ` + greenValueR + `, ` + blueValueR + `)</h3>
        `;
    playing = true;
}

function initColors() {
    for (let i = 0; i < document.getElementsByClassName("colorContent").length; i++) {
        if (i === rightOne) {
            document.getElementsByClassName("colorContent")[i].style.backgroundColor = 'rgb(' + [redValueR, greenValueR, blueValueR].join(',') + ')';
        } else {
            document.getElementsByClassName("colorContent")[i].style.backgroundColor = 'rgb(' + [redValue1, greenValue1, blueValue1].join(',') + ')';
            initValues();
        }
    }
}

function initValues() {
    redValueR = getRandomNumber(0, 255);
    greenValueR = getRandomNumber(0, 255);
    blueValueR = getRandomNumber(0, 255);
    redValue1 = getRandomNumber(0, 255);
    greenValue1 = getRandomNumber(0, 255);
    blueValue1 = getRandomNumber(0, 255);
}


function changeVisibility() {
    if (document.getElementsByClassName("colorContent")[0].style.visibility === "visible") {
        document.getElementsByClassName("colorContent")[0].style.visibility = "hidden";
        document.getElementsByClassName("colorContent")[1].style.visibility = "hidden";
        document.getElementsByClassName("colorContent")[2].style.visibility = "hidden";
    } else {
        document.getElementsByClassName("colorContent")[0].style.visibility = "visible";
        document.getElementsByClassName("colorContent")[1].style.visibility = "visible";
        document.getElementsByClassName("colorContent")[2].style.visibility = "visible";
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function check(num) {
    if (playing) {
        if (num === rightOne) {
            highscore++;
            resume();
        } else {
            document.getElementById("gui").innerHTML = `
            <h3>WRONG!<br>The `+ (rightOne + 1) + getLetter(rightOne) + ` one was right</h3>
            <br>
            <h3>Score: `+ highscore + `</h3>
            <button id="startButton" onclick="resume()">try again</button>
            `;
            highscore = 0;
            playing = false;
        }
    }
}

function getLetter(pos) {
    switch (pos) {
        case 0:
            return "st";
        case 1:
            return "nd";
        case 2:
            return "rd";
        default:
            return "ERROR!";
    }
}