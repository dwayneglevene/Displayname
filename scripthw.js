function getFormValue(){
	var variable1 = document.getElementById("fname").value;
	var variable2 = document.getElementById("lname").value;
	document.getElementById("text").innerHTML = "Your name is" + " " + variable1 + " " + variable2;
}

