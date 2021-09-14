
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

var validos = () => {


  if (document.getElementById("nome").value == "") return false;
  if (document.getElementById("cpf").value == "") return false;
  if (document.getElementById("email").value == "") return false;
  if (document.getElementById("cel").value == "") return false;
  if (document.getElementById("cep").value == "") return false;


}




var validar_tudo = () => {


  if (validos() == false) {
    alert("Dados incompletos");
    return;
  }

  var obj_form = {
    nome: "",
    cpf: "",
    email: "",
    cel: "",
    cep: ""

  }

  console.log(obj_form);


}

// CEP Automático 

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('uf').value = ("");

}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);

  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua').value = "...";
      document.getElementById('bairro').value = "...";
      document.getElementById('cidade').value = "...";
      document.getElementById('uf').value = "...";


      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
};

function validar_tudo() {
  alert("Validando...");
  if (verificar_campos() && validar_nome() && validar_tudo()) {
    document.getElementById("butassin").disabled = false;
    return true;
  }

  return false;
}




function mensagem() {
  alert("Formulario Feito!\nAgradecemos e em breve entraremos em contato. ")

}


// COOKIES SITE

var purecookieTitle = "Cookies.", purecookieDesc = "Este site usa cookies para fornecer serviços e analisar tráfego.", purecookieLink = '<a href="https://policies.google.com/technologies/cookies" target="_blank">O que é isso?</a>', purecookieButton = "Ok"; function pureFadeIn(e, o) { var i = document.getElementById(e); i.style.opacity = 0, i.style.display = o || "block", function e() { var o = parseFloat(i.style.opacity); (o += .02) > 1 || (i.style.opacity = o, requestAnimationFrame(e)) }() } function pureFadeOut(e) { var o = document.getElementById(e); o.style.opacity = 1, function e() { (o.style.opacity -= .02) < 0 ? o.style.display = "none" : requestAnimationFrame(e) }() } function setCookie(e, o, i) { var t = ""; if (i) { var n = new Date; n.setTime(n.getTime() + 24 * i * 60 * 60 * 1e3), t = "; expires=" + n.toUTCString() } document.cookie = e + "=" + (o || "") + t + "; path=/" } function getCookie(e) { for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) { for (var n = i[t]; " " == n.charAt(0);)n = n.substring(1, n.length); if (0 == n.indexOf(o)) return n.substring(o.length, n.length) } return null } function eraseCookie(e) { document.cookie = e + "=; Max-Age=-99999999;" } function cookieConsent() { getCookie("purecookieDismiss") || (document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + " " + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + "</a></div></div>", pureFadeIn("cookieConsentContainer")) } function purecookieDismiss() { setCookie("purecookieDismiss", "1", 7), pureFadeOut("cookieConsentContainer") } window.onload = function () { cookieConsent() };