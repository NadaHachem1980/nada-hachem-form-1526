// DECLARING VARIABLES 
// Declare variables that will
// store references for 
var $btnSubmit = document.getElementById("submit-button");
var $txtFullName = document.getElementById("fullname");
var $txtEmail = document.getElementById("email");
var $txtMessage = document.getElementById("message");
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

// Declare variable that will 
// store regular expression for email
var $regEmail = /\S+@\S+\.\S+/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validateFormData($evt){
	
	var data = new Object();
	var errors = [];
	
    //Full Name validation
	if($txtFullName.value !== ""){
		data.fullname = $txtFullName.value;
	}else{
		errors.push({"fn": "Full name is missing"});
	}

    //Email validation
	if($txtEmail.value !== ""){
	   if($regEmail.test($txtEmail.value)){
			data.email = $txtEmail.value;
	   }else{
		   errors.push({"em": "Email is invalid"});
	   }
	}else{
		errors.push({"em": "Email is missing"});
	}

    //Message validation
	if($txtMessage.value !== ""){
		data.message = $txtMessage.value;
	}else{
		errors.push({"msg": "Message name is missing"});
	}

    //Feedback and error messages
	if (errors !== undefined && errors.length != 0) {
		console.group("ERRORS");
		console.error(errors);
	}else{
		console.group("COLLECTED DATA");
		console.log(data);
	}
	
	$txtFullName.value = "";
	$txtEmail.value = "";
	$txtMessage.value = "";
	
	data = null;
	errors = null;
	
	return false;

}

$btnSubmit.onclick = validateFormData;