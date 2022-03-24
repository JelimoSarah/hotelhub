$('.button').click(function(){
    $('.items').toggleClass("show");
  
  });

let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click",(e)=> {e.preventDefault();
    let attempts = 3;

    function validate(){
        let username = $("#user-name").val();
        let password = $ ("#password").val();
         if ( username == "Andy John" && password == "Access"){
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







