var size2 = "width=120, height=" + (screen.height-71) + ",top=TopPosition,left=" + (screen.width-224) + ",scrollbars=NO"
var estruturaRelatorio;
var estruturaRelatorioF;

function ufval(){

document.frmUf.uf.value = document.frmUf.uf.value.toUpperCase()

if(document.frmUf.uf.value.length > 1){
document.getElementById('diaguf').innerHTML = uftel(document.frmUf.uf.value.toUpperCase());
document.frmUf.uf.value = "";
}


}

function uftel(uf){
var diag;

	if(uf == "MG" || uf == "31"){
	diag = "Minas Gerais 103 31";
	} 
else {
	if(uf == "RJ" || uf == "21"){
	diag = "Rio de Janeiro 103 31";
	}
else {
	if(uf == "RR" || uf == "95"){
	diag = "Roraina 103 31";
	}
else {
	if(uf == "AM" || uf == "92"){
	diag = "Amazonas 103 31";
	}
else {
	if(uf == "PA" || uf == "91"){
	diag = "Para 103 31";
	}
else {
	if(uf == "AP" || uf == "96"){
	diag = "Amapá 103 31";
	}
else {
	if(uf == "MA" || uf == "98"){
	diag = "Maranhão 103 31";
	}
else {
	if(uf == "PI" || uf == "86"){
	diag = "Piauí 103 31";
	}
else {
	if(uf == "BA"|| uf == "71"){
	diag = "Bahia 103 31";
	}
else {
	if(uf == "ES"|| uf == "27"){
	diag = "Espírito Santo 103 31";
	}
else {
	if(uf == "SE"|| uf == "79"){
	diag = "Sergipe 103 31";
	}
else {
	if(uf == "AL"|| uf == "82"){
	diag = "Alagoas 103 31";
	}
else {
	if(uf == "CE"|| uf == "85"){
	diag = "Ceará 103 31";
	}
else {
	if(uf == "PE"|| uf == "81"){
	diag = "Pernambuco 103 31";
	}
else {
	if(uf == "PB"|| uf == "83"){
	diag = "Pernambuco 103 31";
	}
else {
	if(uf == "RN"|| uf == "84"){
	diag = "Rio Grande do Norte 103 31";
	}
else {

	if(uf == "AC"|| uf == "68"){
	diag = "Acre 103 14";
	}
else {
	if(uf == "RO"|| uf == "69"){
	diag = "Rondônia 103 14";
	}
else {
	if(uf == "MT"|| uf == "65"){
	diag = "Mato Grosso 103 14";
	}
else {
	if(uf == "TO"|| uf == "63"){
	diag = "Tocantins 103 14";
	}
else {
	if(uf == "GO"|| uf == "62"){
	diag = "Goiás 103 14";
	}
else {
	if(uf == "MS"|| uf == "67"){
	diag = "Mato Grosso do Sul 103 14";
	}
else {
	if(uf == "PR"|| uf == "41"){
	diag = "Paraná 103 14";
	}
else {
	if(uf == "SC"|| uf == "48"){
	diag = "Santa Catarina 103 14";
	} 
 
else {
	if(uf == "RS" || uf == "51"){
	diag = "Rio Grande do Sul 103 14";
	}
else {
	if(uf == "DF" || uf == "61"){
	diag = "Brasilia 103 14";
	} 
else {
	if(uf == "SP" || uf == "11"){
	diag = "São Paulo 103 15 (Speedy)";

	} else
				{

				diag = "Meu esse estado não existe!"


				}

}}}}}}}}}}}}}}}}}}}}}}}}}}



return diag;

}


function relatorio2(){

}


function relatorio(){


estruturaRelatorioF = "";

var ib;



for(ib = listaRelatorio.length;ib >= 0; ib--){

//listaRelatorio[ib];
//listaRelatorioObs[ib];

//alert(listaRelatorio[ib]);

estruturaRelatorio = listaRelatorio[ib];

estruturaRelatorioF = estruturaRelatorioF + estruturaRelatorio;

}


 estruturaRelatorioF = estruturaRelatorioF.replace("NaN", "");
	
 estruturaRelatorioF = estruturaRelatorioF.replace("undefined", "");
	//alert(estruturaRelatorioF);

 
ctrlcRelatorio(estruturaRelatorioF);

alert("Relatório copiado para a área de transferência");
}

