// CALCULATOR PROGRAM 
const display = document.getElementById("display");
const keys = document.getElementById("keys");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try{
    display.value = eval(display.value);
  }
  catch(error) {
    display.value = "Error";
  }
}


