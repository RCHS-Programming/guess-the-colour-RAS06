var buttons = document.getElementsByClassName('colorButton');
setButtonColor(buttons[0], 0, 0, 255);

var heading; 
heading = document.getElementById('colorValue');
heading.innerHTML = 'Hello World! I do not know what I am doing!';

var red = makeColorValue();
var green = makeColorValue();
var blue = makeColorValue();


function setButtonColor(button, red, green, blue) {
  button.setAttribute('style',
'background-color: rgb('+ 255 +','+ 255 +','+ 0 +');'
);
}

function makeColorValue () {
  return Math.round(Math.random() * 255);
}