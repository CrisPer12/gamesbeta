/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('.idx_btnJogo').click(function(){
        var tipo = $(this).attr('name');
      // alert(tipo);
        $('#idx_conteudo').load(tipo+'.html');
        //alert('jogos/'+tipo+'/play.html');
    });
});
function gerarNumero(MAX) {
    return ""+Math.floor(Math.random() * MAX + 1)+"";
}