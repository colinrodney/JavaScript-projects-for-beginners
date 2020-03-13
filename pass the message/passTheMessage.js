//TRIGGER "SEND MESSAGE" BUTTON @ ENTER BUTTON KEYPRESS
var input = document.getElementById("messageInputField");
console.log(input);

/* trigger "enterButton" function when user presses a key @ keyboard in input
field*/
input.addEventListener("keyup",enterButton)

//EVENT LISTENER FUNCTION: ENTER BUTTON KEYPRESS TRIGGERS "SEND MESSAGE" BUTTON:
// ENTER BUTTON UNICODE IS 13
function enterButton(){
	if(event.keyCode ==13){
		document.getElementById("submitButton").click();
	};
};

//EVENT LISTENER: CLICK SUBMIT BUTTON
document.getElementById("submitButton").addEventListener("click", messageHandler)

// messageHandler function
function messageHandler(){
	var userInput = document.getElementById("messageInputField").value
	
	document.getElementById("lastMsg").innerHTML = userInput
	
	//clear message from input field
	document.getElementById("messageInputField").value = ""
}

// clear enter message field @ mouse click:





