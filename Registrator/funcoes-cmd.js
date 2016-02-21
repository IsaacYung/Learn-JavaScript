resultado = new Array();


function pesquisa(){

var pq = document.frmPesquisa.termo.value;

var metamof

var i;
var j = 0;
resultado.length = 0;


for(i = 0;i < listaPainel.length;i++){

metamof = listaPainel[i].toLowerCase();


	if(metamof.indexOf(pq.toLowerCase()) != -1){

	
	resultado[j] = listaPainel[i] + ": <b id='ps'>" + listaComandos[i] + "</b>";

	j++;



	}

}



if(pq == ""){
document.getElementById('pesquisa').innerHTML = "Pesquisar Comando";
} else {


if(resultado[0] == null){
resultado[0] = "";
}
if(resultado[1] == null){
resultado[1] = "";
}
if(resultado[2] == null){
resultado[2] = "";
}

document.getElementById('pesquisa').innerHTML = resultado[0] + "<br> " + resultado[1] + "<br> " + resultado[2];
}



}