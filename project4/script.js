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

