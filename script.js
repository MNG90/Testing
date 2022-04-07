const css1 = document.querySelector("#css1");
const css2 = document.querySelector("#css2");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const body = document.getElementById("body");


// Setting the CSS background to the input choices

const cssStyle = () => {
	body.style.background = 
		"linear-gradient(to right, " 
		+ input1.value 
		+ "," 
		+ input2.value 
		+ ")";
}

input1.addEventListener("input", cssStyle);
input2.addEventListener("input", cssStyle);

// Displaying the colour values and CSS code for the selected colours

const cssText = () => {
	css1.textContent = 
		"colour 1 = " 
		+ input1.value
		+ ", colour 2 = "
		+ input2.value
		+"."
	css2.textContent = 
		body.style.background
}

input1.addEventListener("input", cssText);
input2.addEventListener("input", cssText);


// *----- RANDOM COLOUR GENERATOR -----* //

const randomButton = document.querySelector("#randomButton");


// Hexadecimal Colour Generator //

const randomCode = () => {
	let randomColourMaker = "#" + Math.floor(Math.random() * 16777216).toString(16).padStart(6, "0");
	return randomColourMaker
}

const colourMaker1 = () => input1.value = randomCode();

const colourMaker2 = () => input2.value = randomCode();

// Calling the random colour generator //

const randomColourPicker = () => {
	colourMaker1();
	colourMaker2();
	cssStyle();
	cssText();
	console.log(input1.value);
	console.log(input2.value);
}

randomButton.addEventListener("click", randomColourPicker);



