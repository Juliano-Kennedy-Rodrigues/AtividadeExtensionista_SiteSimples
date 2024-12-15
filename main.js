//comentário
//instalar extensão "live server"

var btAzul = document.getElementById('btAzul')

btAzul.onclick = function pagAzul() {
    location.href="outrasPags/lixoAzul.html"
  }

var btVerm = document.getElementById('btVermelho')

btVerm.onclick = function pagVermelho() {
  location.href="outrasPags/lixoVermelho.html"
  }

var btAmar = document.getElementById('btAmarelo')

btAmar.onclick = function pagAmarelo() {
  location.href="outrasPags/lixoAmarelo.html"
  }

var btVerde = document.getElementById('btVerde')

btVerde.onclick = function pagVerde() {
  location.href="outrasPags/lixoVerde.html"
  }







var telaInicial = document.getElementById('inicio')

telaInicial.onclick = function vaiInicio() {
  window.location.reload()
}

var btCidade = document.getElementById('portalCidade')

btCidade.onclick = function abrePortalCidade(){
  window.open("https://pmsrs.mg.gov.br/")
 }

 var btResiduos = document.getElementById('portalResiduos')

 btResiduos.onclick = function abrePortalResiduos() {
  window.open("https://portalresiduossolidos.com/o-que-e-o-servico-de-coleta-de-lixo/")
 }

 var btExemplo = document.getElementById('exemplo')

 btExemplo.onclick = function abreAlgo() {
  window.open("https://www.google.com/")
 }