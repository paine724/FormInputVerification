//Hide hints

var $password= $("#password");
var $confirmPassword= $("#confirm_password");

$("form span").hide();


function isPasswordValid(){
  return $password.val().length > 8;
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val() ;
}

function canSubmit (){
  return isPasswordValid && arePasswordsMatching();
  
}
//#password
function passwordEvent(){
  //Find out if password is valid
  if(isPasswordValid()) {
        //Hide hint if valid
   
    $password.next().hide();
    
    
  }
  
  else{
     //else show hint 
    $password.next().show();
  }
  
  
}


//Confirmation password
//$confirmpassword
function confirmPasswordEvent(){
  
  if (arePasswordsMatching()){
  
    $confirmPassword.next().hide();
  
  
  } else{
    
    $confirmPassword.next().show();
    
  }
  
  
}

function enableSubmitEvent(){
  
  $("#submit").prop("disabled", !canSubmit());
  
}
  //when event happens on confirmation input
  
 
//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();