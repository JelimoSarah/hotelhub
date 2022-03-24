

let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click",(e)=> {e.preventDefault();
    let attempts = 3;
// $("#submit-btn").click(()=>{
  
    function validate(){
        let username = $("#user-name").val();
        let password = $ ("#password").val();
        //console.log(username,password)//remove
         if ( username == "Andy" && password == "Access"){
             window.location = "../pages/booking.html"; // Allow Booking.
             return false;
             }
             else{
             attempts--;
             alert("You have enterd the wrong password"+" You have "+ attempts +" attempts left !");
             
             // Disabling fields after 3 attempts.
            //  if( attempts == 0){
            //     document.getElementById("#user-name").disabled = true;
            //     document.getElementById("#password").disabled = true;
            //     document.getElementById("#submit").disabled = true;
            //  return false;
            //  }
             }
            }
   validate()
});
