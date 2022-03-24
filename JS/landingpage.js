// let toggle = document.getElementsByClassName("btnss");
// toggle.addEventListener("click",(e)=> {e.preventDefault();
//   alert("hi")
// });
// $("#submit-btn").click(function () {
//   alert("hi")
//   });
// $(".btnss")("click",(e)=> {e.preventDefault();
// $("#caleb").show();
// });

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// function classToggle() {
//   const navs = document.querySelectorAll('.Navbar__Items')
  
//   navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }

// document.querySelector('.Navbar__Link-toggle')
//   .addEventListener('click', classToggle);