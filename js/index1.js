$(document).scroll(function(){

     if($(document).width() < 1024)
     return false;  


     if($(document).scrollTop() > $('.full-page').height() / 2){

         $('header').addClass('fixed');
     }
     else{

        $('header').removeClass('fixed');
     }
});


$('.up-btn').on("click",function(){
   
     $("html,body").animate({

         scrollTop:0
     }, 2000);
      
});


$('#show-menu').on('click',function(){

    $('#hidden-menu').animate({
        "right":0
    },500)
})



$('.close').on('click',function(){

    $('#hidden-menu').animate({
        "right":'-300px'
    },200)
});