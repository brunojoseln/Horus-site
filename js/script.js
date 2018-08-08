$(function () {
  $(window).scroll(function () {
    var wscroll = $(window).scrollTop();
    if (wscroll > 0) {
      $('#navbar').addClass("navscroll");
    } else {
      $('#navbar').removeClass("navscroll");
    }
  });
});

//Função que altera a cor do input
//Recebe como parametro o id e o Numero maximo de letras

function cor(nMaxLetras, codigoid) {

  var conteudo = document.getElementById(codigoid).value;

  //Se o usuário estiver digitando o e-mail
  if (codigoid == "txtEmail") {

    if ((conteudo.length > 3) && (conteudo.search("@") != -1)) {
      document.getElementById(codigoid).className = "uk-form-success uk-input";
    } else {
      document.getElementById(codigoid).className = "uk-form-danger uk-input";
    }
  }

  //Se o usuário estiver digitando a mensagem
  else if (codigoid == "txtMensagem") {
    if (conteudo == "") {
      document.getElementById(codigoid).className = "form-golden uk-textarea";
    } else if (conteudo.length < nMaxLetras) {
      document.getElementById(codigoid).className = "uk-form-danger uk-textarea";
    }
    else {
      document.getElementById(codigoid).className = "uk-form-success uk-textarea";
    }
  } else {
    if (conteudo == "") {
      document.getElementById(codigoid).className = "form-golden uk-input";
    } else if (conteudo.length < nMaxLetras) {
      document.getElementById(codigoid).className = "uk-form-danger uk-input";
    }
    else {
      document.getElementById(codigoid).className = "uk-form-success uk-input";
    }

  }
};