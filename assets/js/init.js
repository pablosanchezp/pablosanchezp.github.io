$(document).ready(function(){
    $('.collapsible').collapsible();
  });

$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  
  $(".fa").on("click",function(){
   $(this).toggleClass("fa-angle-down");
   $(this).toggleClass("fa-angle-up");
});
