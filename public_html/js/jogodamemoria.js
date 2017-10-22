// como criar um on ready
 //TOTAL DE CARTAS

$(document).ready(function(){
    const jm_TotalCards = 15;
    jm_Escolhas();
    jm_MontarImagens(jm_TotalCards);
});
function jm_MontarImagens(jm_TotalCards){
    var tabelaIMG = tabNumerosAleatorios(jm_TotalCards);
    for(var i=1;i<=jm_TotalCards;i++){
        $('#card'+i).attr('alt', 'img'+tabelaIMG[i]);
    }
    tabelaIMG = tabNumerosAleatorios(jm_TotalCards);
    for(var i=1;i<=jm_TotalCards;i++){
        $('#card'+(i+parseInt(jm_TotalCards))).attr('alt', 'img'+tabelaIMG[i]);
    }
}
function jm_Escolhas(){
    var imagem1; 
    var imagem2;
    var clique = 1;
    $('.jm_ImgVirada').click(function(){
        if(clique !== 0){
            $(this).attr('src', 'img/jogodamemoria/'+$(this).attr('alt')+'.png');
        }
        if(clique === 1){
            imagem1 = $(this).attr('alt');
            clique = 2;
        }else if(clique === 2){
            clique=0;
            imagem2 = $(this).attr('alt');
            setTimeout(function(){
                if(imagem1!==imagem2){
                        $('.jm_ImgVirada[alt="'+imagem1+'"]').attr('src', 'img/jogodamemoria/padrao.jpg');
                        $('.jm_ImgVirada[alt="'+imagem2+'"]').attr('src', 'img/jogodamemoria/padrao.jpg');
                }else{
                    $('.jm_Card[alt="'+imagem2+'"]').removeClass('jm_ImgVirada');
                    $('.jm_Card[alt="'+imagem2+'"]').addClass('jm_ImgDesvirada');
                }
                clique = 1;
            }, 700);
        }
        if($('.jm_ImgDesvirada').length===(30)){
            alert('vitoria');
        }
    });
}
function tabNumerosAleatorios(tamanho){
    var tabela = new Array;
    var numero;
    var verificar;
    for(var i=1;i<=tamanho;i++){
        verificar = 0;
        numero = gerarNumero(tamanho);
        for(var j=1;j<i;j++){
            if(numero===tabela[j]){
                verificar = 1;
            }
        }
        if(verificar === 1){
            i--;
        }else{
            tabela[i]=numero;
        }
    }
    return tabela;
}