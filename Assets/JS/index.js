$(document).ready(function(){
    $('.center-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      arrows: true,
      dots: false,
      speed: 300,
      centerPadding: '20px',
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true
    });
  });




//   x=document.querySelector("slide__JSImage.slick-active");
//   x[0].style.backgroundColor = "red";
 
// var sideBar = document.getElementsByClassName('slick-current');
// console.log(sideBar.className)
// if (sideBar.classList.contains('active')){
//     console.log('active')
// }
// else (console.log('not active'))
// var requiredElement = x[0];
// console.log(x);

// var g = document.getElementById("clientOne");
// var btns = header.getElementsByClassName("btn");
// console.log(g)


var reviewArray=[
    "Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam eget lorem in ex aliquam dapibus." ,
    " Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut suscipit ligula malesuada. Donec dui nulla. ",
    " Vestibulum lectus massa, volutpat ut tristique nec, volutpat in turpis. In vehicula tempus odio. Nullam enim ligula. ",
    " Nunc accumsan finibus sollicitudin. Integer malesuada purus sapien, sit amet volutpat sem fringilla ut. Proin viverra scelerisque mollis. ",
    " Fusce euismod eget nulla a tempus. Pellentesque in varius metus. Fusce iaculis cursus ante, vel vestibulum dui sagittis vitae. ",
    " Cras et est eu tellus fringilla congue. Nunc efficitur libero ut nunc volutpat porttitor. Aliquam in justo at neque. ",
    " Vivamus pellentesque dignissim neque, quis viverra diam venenatis sit amet. Donec dignissim turpis quis libero posuere auctor. ",
    " Aenean varius accumsan eros, id molestie leo vestibulum a. Ut semper dictum feugiat. Integer tincidunt interdum eros ut accumsan. ",
    " Morbi viverra ultrices magna vel egestas. Suspendisse rutrum, lacus nec sodales gravida, augue ante sollicitudin sem. "
   ,
]

// var printedText=reviewArray[0];
// document.getElementById("demo").innerHTML='<i class="fas fa-quote-left"></i>'+ printedText + '<i class="fas fa-quote-right"></i>';

// var printedText=''
//   (function(){for(var i=0 ; i<reviewArray.length; i++ ) { 
  
//     setTimeout(function() { printedText=''; printedText=reviewArray[i]; document.getElementById("demo").innerHTML='<i class="fas fa-quote-left"></i>'+ printedText + '<i class="fas fa-quote-right"></i>'; console.log(printedText);  },300);
//   ;
  
    
//     // document.getElementById("demo").innerHTML='<i class="fas fa-quote-left"></i>'+ printedText + '<i class="fas fa-quote-right"></i>'; 
//     console.log(printedText)
//   }
//   }()

function gotClicked(clicked_id)
  {
    //   console.log(clicked_id);
      switch(clicked_id){
          case("clientOne"):printedText=reviewArray[0]; break; 
          case("clientTwo"):printedText=reviewArray[1]; break; 
          case("clientThree"):printedText=reviewArray[2]; break; 
          case("clientFour"):printedText=reviewArray[3]; break; 
          case("clientFive"):printedText=reviewArray[4]; break; 
          case("clientSix"):printedText=reviewArray[5]; break; 
          case("clientSeven"):printedText=reviewArray[6]; break; 
          case("clientEight"):printedText=reviewArray[7]; break; 
          case("clientNine"):printedText=reviewArray[8]; break; 
          default: break;
      }
    document.getElementById("demo").innerHTML='<i class="fas fa-quote-left"></i>'+ printedText + '<i class="fas fa-quote-right"></i>';
  }