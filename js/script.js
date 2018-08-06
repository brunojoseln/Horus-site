$(function(){
  $(window).scroll(function(){
    var wscroll = $(window).scrollTop();
    if (wscroll > 0) {
      $('#navbar').addClass("navscroll");
    } else {
      $('#navbar').removeClass("navscroll");
    }
  });
});
//Função que altera a cor do input

function cor(a){
  if (a == 1) {
    var NLetras = document.getElementById("txtNome").value;
  }


  if(NLetras == ""){
    document.getElementById("txtNome").className = "form-golden uk-input";
  } else if(NLetras.length <= 2){
    document.getElementById("txtNome").className = "uk-form-danger uk-input";}
    else {
  document.getElementById("txtNome").className = "uk-form-success uk-input";
};

}
