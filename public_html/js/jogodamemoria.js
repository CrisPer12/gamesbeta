// como criar um on ready
 //TOTAL DE CARTAS

$(document).ready(function(){
    const TotalCards = 15;
    escolhas();
    montarImagens(TotalCards);
});
function montarImagens(TotalCards){
    var tabelaIMG = tabNumerosAleatorios(TotalCards);
    for(var i=1;i<=TotalCards;i++){
        $('#card'+i).attr('alt', 'img'+tabelaIMG[i]);
    }
    tabelaIMG = tabNumerosAleatorios(TotalCards);
    for(var i=1;i<=TotalCards;i++){
        $('#card'+(i+parseInt(TotalCards))).attr('alt', 'img'+tabelaIMG[i]);
    }
}
function escolhas(){
    var imagem1; 
    var imagem2;
    var jm_clique = 1;
    $('.jm_ImgVirada').click(function(){
        $(this).attr('src', 'img/jogodamemoria/'+$(this).attr('alt')+'.png');
        if(jm_clique === 1){
            imagem1 = $(this).attr('alt');
            jm_clique = 2;
        }else{
            imagem2 = $(this).attr('alt');
            if(imagem1!==imagem2){
                setTimeout(function(){
                    $('.jm_ImgVirada[alt="'+imagem1+'"]').attr('src', 'img/jogodamemoria/padrao.jpg');
                    $('.jm_ImgVirada[alt="'+imagem2+'"]').attr('src', 'img/jogodamemoria/padrao.jpg');
                }, 700);
            }
            jm_clique = 1;
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