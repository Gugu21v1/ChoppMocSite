var tempo_inicial = $("#tempo").text();
var campo = $(".campo_digitacao");

$(function (){
    tamanho_frase();
    iniciar_contadores();
    iniciar_cronometro();
    $("#botao_reiniciar").click(reinicia_jogo);
});

function tamanho_frase() {
    var frase = $(".frase").text();
    var num_palavras = frase.split(" ").length;
    var tamanho_frase = $("#tamanho_da_frase");
    tamanho_frase.text(num_palavras);
}

function iniciar_contadores() {
    campo.on("input", function () {
        var conteudo = campo.val();
        var qnt_palavras = conteudo.split(/\S+/).length - 1;
        $("#contador_palavras").text(qnt_palavras);
        var qnt_caracteres = conteudo.length;
        $("#contador_caracteres").text(qnt_caracteres);
    });
}

function iniciar_cronometro() {
    var tempo_restando = $("#tempo").text();
    campo.one("focus", function () {
        $("#botao_reiniciar").attr("disabled",true);
        var cronometroID = setInterval(function () {
            tempo_restando--;
            $("#tempo").text(tempo_restando);
            if (tempo_restando < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                $("#botao_reiniciar").attr("disabled", false);
            }
        }, 1000);
    });
}

function reinicia_jogo() {
    campo.attr("disabled", false);
    campo.val("");
    $("#contador_palavras").text("0");
    $("#contador_caracteres").text("0");
    $("#tempo").text(tempo_inicial);
    iniciar_cronometro();
}

