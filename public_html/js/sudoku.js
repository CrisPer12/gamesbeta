/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
    var selectQuadrado;
    $('.smallSquare').click(function(){
        selectQuadrado = $(this).attr('id');
        $('.smallSquare').css("background-color", "white");
        $(this).css("background-color", "yellow");
       // alert(selectQuadrado);
        $('.numero').click(function(){
            $('#'+selectQuadrado).attr('value',$(this).val());
        });
    });
});
function ganhou(){
    var valor;
    var verif=false;
        for(var j=1;j<=9;j++){
            //valor = getRandomSudoku();
           // if(verificarLiha(valor,i,j)===false){
               // $('#sdkQuadro'+i+'-'+j).attr('value',valor);
                //alert(verifica);
           // } 
           while(verif===false){
                valor = getRandomSudoku();
                verif = verficarLinha(valor,1,j);
           }
           $('#sdkQuadro'+1+'-'+j).attr('value',valor);
        }
        //
    
}
function verficarLinha(valor,linha,limit){
    var existe = true;
    var quadro;
    for(var x=1;x<limit;x++){
        quadro=$('#sdkQuadro'+linha+'-'+x).val();
        if(valor===quadro){
            existe = false;
           // alert(valor);
        }
    }
    return(existe);
}
$(function(){
    $('#olhar').click(function(){
        ganhou();
        //alert(c);
    });
}); 
function getRandomSudoku() {
    return ""+Math.floor(Math.random() * 9 + 1)+"";
}
