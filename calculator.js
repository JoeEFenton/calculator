// Assign variables to the HTML elements //
var nums = document.getElementsByClassName('num');
var clear = document.querySelector('#clear');
var calculationField = document.querySelector('#calculation_field');
var equal = document.querySelector('#equal');
// Add event listeners to each button  //
for (var num of nums) {
	num.addEventListener('click', addToEquation);
}
clear.addEventListener('click', clearField);
equal.addEventListener('click', computeEquation);

let storedEquation = "";
// add number and operator to field //
function addToEquation(e) {
	if (this.textContent === "x") {
		storedEquation += "*";
		calculationField.textContent += "*";
	} else {
		storedEquation += this.textContent;
		calculationField.textContent += this.textContent;
	}
}
//clears equation instead of using reload //
function clearField() {
	calculationField.textContent = "";
	storedEquation = [];
}
// runs equation stored //
function computeEquation() {
	storedEquation = eval(storedEquation);
	calculationField.textContent = storedEquation;
}
