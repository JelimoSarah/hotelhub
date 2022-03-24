$("#reload-page").click(()=>{
    $(".sign-up-now").show();
<<<<<<< HEAD
    $(".wrong-password").hide();
});
=======
    $(".wrong-password").hide();    

});



>>>>>>> development
let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click",(e)=> {e.preventDefault();
    let attempts = 3;
// $("#submit-btn").click(()=>{
<<<<<<< HEAD
=======
  
>>>>>>> development
    function validate(){
        let username = $("#user-name").val();
        let password = $ ("#password").val();
        //console.log(username,password)//remove
         if ( username == "Andy" && password == "Access"){
             window.location = "../pages/booking.html"; // Allow Booking.
             return false;
             }
             //You have enterd the wrong password
             else{
             attempts--;
             $(".sign-up-now").hide();
             $(".wrong-password").show();
             }
            }
   validate()
});
<<<<<<< HEAD







=======
>>>>>>> development
