
// IIFE immediately sets variable number to 0 @ page load
(function(){
	let startValue = 0
	document.getElementById("variableNumber").innerHTML = startValue;
	//document.write(typeof num);
})();

counterNum = 0
/**/
// increment number by one
document.getElementById("increment").addEventListener("click",addOne);
function addOne(){
	counterNum++
	document.getElementById("variableNumber").innerHTML = counterNum;
	};

// decrement number by one
document.getElementById("decrement").addEventListener("click",minusOne);
function minusOne(){
	counterNum--
	document.getElementById("variableNumber").innerHTML = counterNum;
};



