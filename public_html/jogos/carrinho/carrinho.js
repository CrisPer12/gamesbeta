$(document).ready(function(){
   var tela = $(this);
   personagemMove(tela);
   inimigoMove(1,100);
   inimigoMove(2,300);
   inimigoMove(3,50);
   inimigoMove(4,80);
   inimigoMove(5,120);
});
 ///////////////////////////////////////////////////  
function personagemMove(tela){
  $(tela).keypress(function(e){
    //alert(e.keyCode);
    if(e.keyCode === 100 &&  $('#personagem').css("left")!=="180px"){
      $('#personagem').css({"left": "+=20px"});
    }
    if(e.keyCode === 97 &&  $('#personagem').css("left")!=="0px"){
      $('#personagem').css({"left": "-=20px"});
    }
  });
}
function inimigoMove(inimigoNum,time){
        var posPersonagemLeft;
        var posPersonagemTop;
        var posInimigoLeft;
        var posInimigoTop;
    setInterval(function(){ 
         $('#inimigo'+inimigoNum).css({"top": "+=20px"});
         if($('#inimigo'+inimigoNum).css("top")==="180px"){
              $('#inimigo'+inimigoNum).css({"top": "0px"});
         }
        posPersonagemLeft = $('#personagem').css("left");
        posPersonagemTop = $('#personagem').css("top");
        posInimigoLeft = $('#inimigo'+inimigoNum).css("left");
        posInimigoTop=$('#inimigo'+inimigoNum).css("top");
        
        if(posPersonagemLeft===posInimigoLeft && 
           posPersonagemTop===posInimigoTop){
           $('#inimigo'+inimigoNum).css({"top": "0px"});
           $('#personagem').css({"left": "0px"});
        }

    }, time); 
}