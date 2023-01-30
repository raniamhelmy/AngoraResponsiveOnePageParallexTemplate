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
      // autoplaySpeed: 5000,
      autoplay: false,
      responsive: [
        {
          breakpoint: 800,
           settings: {
              
              slidesToShow: 3,
              slidesToScroll: 1
           }
        },
        {
          breakpoint: 500,
           settings: {
              slidesToShow: 1,
              slidesToScroll: 1
           }
        },
      ]
    });
  });


  var reviewArray=[
    " Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam eget lorem in ex aliquam dapibus. " ,
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

// next and previous button click
$('body').on('click', '.slick-next' , function () {
  // alert('next working');
  next()
})

$('body').on('click', '.slick-prev', function () {
  // alert('prev working')
  prev()
})


var quote="";
var count=0;
function next(){
  count++;
  if(count >= reviewArray.length){
      count = 0;
      quote=reviewArray[count];
      
  }else{
    quote=reviewArray[count];
  }
  printedText=quote;
  // console.log(printedText)
  document.getElementById("demo").innerHTML='<i class="fas fa-quote-left"></i>'+ printedText + '<i class="fas fa-quote-right"></i>';
}

function prev(){
  count--;
  if(count < 0){
      count = reviewArray.length -1;
      quote=reviewArray[count];
  }else{
      quote=reviewArray[count];
  }
  printedText=quote;
  // console.log(printedText)
  document.getElementById("demo").innerHTML='<i class="fas fa-quote-left"></i>'+ printedText + '<i class="fas fa-quote-right"></i>';
}


/* Deprecated For Behaviour Reasons*/
function gotClicked(clicked_id){

}

/* Deprecated For Behaviour Reasons

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

  */