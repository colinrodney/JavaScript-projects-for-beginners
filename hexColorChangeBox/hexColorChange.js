

function changeColor(){
	color ="#"
	var charList ="abcde123456789"
	for(var i = 0; i < 6; i++){
		/*assigns 6 random index values to build hex color
		 value when function fires*/
		color = color + charList[Math.floor(Math.random() * charList.length)]

		//set background of body element w/ random generated hex value
		document.getElementById("body").style.background = color
	}
	document.getElementById("hexValue").innerHTML = "Hex Value: " + color
};



