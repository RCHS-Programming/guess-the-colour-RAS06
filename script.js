var buttons = document.getElementsByClassName('colorButton');
setButtonColor(buttons[0], 0, 0, 255);

var heading; 
heading = document.getElementById('colorValue');

var answerMessage = document.getElementById('answer');

var storeR = "";
var storeG = "";
var storeB = "";

function startGame () {



  answerMessage.innerHTML = "";

var answerButton = Math.round(Math.random() * (buttons.length - 1));



for (var i = 0; i < buttons.length; i++) {

var red = makeColorValue();
var green = makeColorValue();
var blue = makeColorValue();

  setButtonColor(buttons[i], red, green, blue);


  if (i === answerButton) {
    rgb =`(${red}, ${green}, ${blue})`;
		storeR = red;
		storeG = green;
		storeB = blue;
    heading.innerHTML = `(${red}, ${green}, ${blue})`;
  }

    buttons[i].addEventListener('click', function() {
      if (this === buttons[answerButton]) {
        answerMessage.innerHTML = "Correct!";
						
	// This! Do the thing here! Don't forget. 
				
		document.body.style.background = 'rgb(' + storeR + ',' + storeG + ',' + storeB + ')';



      } else {
        answerMessage.innerHTML = "Wrong Answer! Guess  Again!";
				
				document.body.style.background = 'white';


      }
    });
  }
}


function setButtonColor(button, red, green, blue) {
  button.setAttribute('style',
'background-color: rgb('+ red +','+ green +','+ blue +');'
);
}



function makeColorValue () {
  return Math.round(Math.random()*255);
}


startGame();


document.getElementById('resetButton').addEventListener('click', startGame);