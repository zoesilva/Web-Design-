$(".burger").click(function(){
    $(".sidenav").toggleClass("open");
    $(".sidenav li").toggle();
    $(this).toggleClass("exit");
 
    
});
$(".burger").click(function(){
    $(".nav-order").toggle();
});

$(".sandwiches").click(function(){
    $(".sandwiches-grid-container").toggle();
    $(".sandwiches-grid-container").css("display", "grid");
    $(".breakfast-grid-container").css("display", "none");
    $(".bowls-salads-grid-container").css("display", "none");
    $(".soups-grid-container").css("display", "none");
    $(".specials-grid-container").css("display", "none");
    $(".drinks-grid-container").css("display", "none");
});
$(".breakfast").click(function(){
    $(".sandwiches-grid-container").css("display", "none");
    $(".breakfast-grid-container").toggle();
    $(".breakfast-grid-container").css("display", "grid");
    $(".bowls-salads-grid-container").css("display", "none");
    $(".soups-grid-container").css("display", "none");
    $(".specials-grid-container").css("display", "none");
    $(".drinks-grid-container").css("display", "none");

    
});

$(".bowls").click(function(){
    $(".sandwiches-grid-container").css("display", "none");
    $(".breakfast-grid-container").toggle();
    $(".breakfast-grid-container").css("display", "none");
    $(".bowls-salads-grid-container").css("display", "grid");
    $(".soups-grid-container").css("display", "none");
    $(".specials-grid-container").css("display", "none");
    $(".drinks-grid-container").css("display", "none");
});
$(".drinks").click(function(){
    $(".sandwiches-grid-container").css("display", "none");
    $(".breakfast-grid-container").toggle();
    $(".breakfast-grid-container").css("display", "none");
    $(".drinks-grid-container").css("display", "grid");
    $(".bowls-salads-grid-container").css("display", "none");
    $(".soups-grid-container").css("display", "none");
    $(".specials-grid-container").css("display", "none");
   

});
$(".soups").click(function(){
    $(".sandwiches-grid-container").css("display", "none");
    $(".drinks-grid-container").toggle();
    $(".drinks-grid-container").css("display", "none");
    $(".breakfast-grid-container").css("display", "none");
    $(".soups-grid-container").css("display", "grid");
    $(".bowls-salads-grid-container").css("display", "none");
    $(".specials-grid-container").css("display", "none");
   

});
$(".specials").click(function(){
    $(".sandwiches-grid-container").css("display", "none");
    
    $(".drinks-grid-container").css("display", "none");
    $(".breakfast-grid-container").css("display", "none");
    $(".soups-grid-container").css("display", "none");
    $(".bowls-salads-grid-container").css("display", "none");
    $(".specials-grid-container").css("display", "grid");
   
   

});

$(document).ready(function() {
    // Set the interval in milliseconds
    var interval = 3000; // Change this value to adjust the interval
    
    // Function to move to the next slide
    function nextSlide() {
      // Get the currently checked radio input
      var currentRadio = $(".carousel-open:checked");
      // Get the next radio input
      var nextRadio = currentRadio.next(".carousel-open");
      // If there is no next radio input, select the first one
      if (nextRadio.length === 0) {
        nextRadio = $(".carousel-open").first();
      }
      // Trigger click event on the next radio input
      nextRadio.trigger("click");
    }
    
    // Set interval to move to the next slide automatically
    var slideInterval = setInterval(nextSlide, interval);
    
    // Pause automatic sliding when mouse enters the carousel
    $(".carousel").mouseenter(function() {
      clearInterval(slideInterval);
    });
    
    // Resume automatic sliding when mouse leaves the carousel
    $(".carousel").mouseleave(function() {
      slideInterval = setInterval(nextSlide, interval);
    });
  });