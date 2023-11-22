var telaInicial =document.getElementById('inicio')

telaInicial.onclick = function vaiInicio() {
  location.href="/index.html"
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