console.log("Your index.js file is loaded correctly!");

$(".plantpic").hover(function(){
    console.log("You hovered on .plantpic!");
  });

  $(".plantpic").mouseenter(function(){
    $(".plantpic").animate({
      left: '250px',
      width: '+=80px'
    });
  });

  $(".plantpic").mouseleave(function(){
    $(".plantpic").animate({
      left: '250px',
      width: '-=80px'
    });
  });  

  $(".dogpic").mouseenter(function(){
    $(".dogpic").animate({
      left: '250px',
      width: '+=80px'
    });
  });

  $(".dogpic").mouseleave(function(){
    $(".dogpic").animate({
      left: '250px',
      width: '-=80px'
    });
  });  