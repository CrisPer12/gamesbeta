// como criar um on ready
const max = 10;
$(document).ready(function(){
    var jm_imagem1; 
    var jm_imagem2;
    var jm_clique = 1;
    $('.jm_ImgVirada').click(function(){
        $(this).attr('src', 'img/jogodamemoria/img1.png');
        if(jm_clique === 1){
            jm_imagem1 = $(this).attr('alt');
            jm_clique = 2;
        }else{
            jm_imagem2 = $(this).attr('alt');
            if(jm_imagem1!==jm_imagem2){
                $('.jm_ImgVirada[alt="'+jm_imagem1+'"]').attr('src', 'img/jogodamemoria/padrao.jpg');
                $(this).attr('src', 'img/jogodamemoria/padrao.jpg');
            }
            jm_clique = 1;
        }
    });
});
