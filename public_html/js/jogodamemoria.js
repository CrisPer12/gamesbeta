// como criar um on ready
const max = 10;
$(document).ready(function(){
    pontos=0; 
    var clubes = new Array();
    var existe;
    for(var x=1;x<=2;x++){
        for(var i=0;i<max;i++){
           existe = 0;
           clubes[i] = getRandom(max);
           for(var j=0;j<i;j++){
               if(clubes[i]===clubes[j]){
                   existe = 1; 
               }
           }
           if(existe===1){
            i--; 
           }else{
               
           }
        }
     }
    escolhas();
});
function escolhas(){
        var click=1;
        var src;
    $('.jmItem').click(function(){
        if(click===1 && $(this).attr('value')==='virado'){
            src = $(this).attr('name');
            vira(this,src);
            click=2;
        }else if(click===2 && $(this).attr('value')==='virado'){     
            var src2 = $(this).attr('name');
            vira(this,src2);
            if(src2!==src){
                setTimeout(function(){
                    $('.jmItem[name="'+src+'"]').attr('src','img/jogodamemoria/padrao.jpg');
                    $('.jmItem[name="'+src2+'"]').attr('src','img/jogodamemoria/padrao.jpg');
                    $('.jmItem[name="'+src+'"]').attr('value','virado');
                    $('.jmItem[name="'+src2+'"]').attr('value','virado');
                click=1;
                }, 700);
            }else{
                pontos++;
                $('#jmPontos').text(pontos);
                click=1;
            }
        }
        if(pontos===max){
                $('#jmPontos').append('<br>Parabéns, Você Ganhou');
        }
        //alert($('.item[value="virado"]').length);
    });
}
function vira(elemento,src){
    $(elemento).attr('src','img/jogodamemoria/'+src+'.png');
    $(elemento).attr('value','desvirado');
}
function getRandom() {
    return Math.floor(Math.random() * max + 1);
}