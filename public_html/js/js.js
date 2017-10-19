/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $('.btn-jogo').click(function(){
        var tipo = $(this).attr('value');
        $('#conteudo').load('jogos/'+tipo+'/play.html');
        //alert('jogos/'+tipo+'/play.html');
    });
});