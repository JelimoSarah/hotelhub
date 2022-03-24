// responsive navigation bar click start
$('.button').click(function(){
  $('.items').toggleClass("show");

});
// responsive navigation bar click end


let i=0;
let images=[];
const TIME=3000;
images[0] ="../images/hotelimages/display1.jpg";
images[1] ="../images/hotelimages/display2.jpg";
images[2] ="../images/hotelimages/display3.jpg";
images[3] ="../images/hotelimages/display4.jpg";
images[4] ="../images/hotelimages/display5.jpg";


function slideshow(){

  document.querySelector('#display-photo').src= images[i];
  if(i<images.length-1){
    i++;
  }else{
    i=0;
  }

  setTimeout("slideshow()",TIME);
};

window.onload=slideshow();
