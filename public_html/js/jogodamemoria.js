// como criar um on ready

$(document).ready(function(){
    escolhas();
});
function escolhas(){
    var imagem1; 
    var imagem2;
    var jm_clique = 1;
    $('.jm_ImgVirada').click(function(){
        $(this).attr('src', 'img/jogodamemoria/img1.png');
        if(jm_clique === 1){
            imagem1 = $(this).attr('alt');
            jm_clique = 2;
        }else{
            imagem2 = $(this).attr('alt');
            if(imagem1!==imagem2){
                setTimeout(function(){
                    $('.jm_ImgVirada[alt="'+imagem2+'"]').attr('src', 'img/jogodamemoria/padrao.jpg');
                }, 2000);
            }
            jm_clique = 1;
        }
    });
}
