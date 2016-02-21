listaClt = new Array(); 
listaGravador = new Array(); 

listaRelatorio = new Array(); 

listaRelatorioObs = new Array(); 

var estruturaFim;
var data = new Date();
var cont = 0;
var cont1 = 0;


var estruturaTextoFim;
var estruturaTexto;


var imagem = new Image();



var conCf = 1;

var nomeG, paG, anG, cpfG, obsG;

function cadastraAN(){

if((document.preCadastro.nome.value != "") && (document.preCadastro.pa.value != "")){

var estrutura;

//Variaveis de processamento - VARIAVEIS
var nome = document.preCadastro.nome.value;
var pa = document.preCadastro.pa.value;
var filiacao;

//Comprimir textos em variaveis - VARIAVEIS
	var cadastroClt = "<table border='0'><tr><td><spam id='titulos'>Cliente </span></td> <td><input style='width: 130px; height: 20px;' name='clt' tabindex='1' type='text'></input></td></tr><tr><td><spam class='titulos'>CPF</span></td><td><input name='cpf' tabindex='2' style='width: 130px; height: 20px;' type='text' onkeyup='validaCpf();'></input></td></tr></table><br><input type='button' value='Confirmar' onclick='adicionaClt();'>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <a id='relat' href='javascript:relatorio();'></a>";
	var tituloAN = capitalize(nome) + " | " + " PA " + pa;  

//Chmar funções em hRef - VARIAVEIS
var func1 = "javascript:voltar();";




listaClt.length = 0;

conCf = 2;
document.getElementById('cadastro').innerHTML = "<center>" + tituloAN.link(func1) + "</center>" + "<br>";

document.getElementById('cabecalho').innerHTML = cadastroClt;



document.getElementById('obs').innerHTML = "<textarea name='obs' style='width: 90%; height: 70px;'></textarea>";

anG = nome;
paG = pa;

	} else {
	
	if(document.preCadastro.nome.value == ""){
		document.preCadastro.nome.className = "erroValida";
	}

	if(document.preCadastro.nome.value == ""){
		document.preCadastro.pa.className = "erroValida";
	}
	

	}
document.cltCadastro.clt.focus();
}

function tecla_pressionada(){
var tecla = window.event.keyCode;

return tecla;
}

//**************************************************************************************************
var tipoValid;

function validaCpf(){

//alert(ValidarCNPJ(cpf));
//alert(ValidarCNPJ(cpf));
var cpf = document.cltCadastro.cpf.value;

	
	if(cpf.length > 10 && cpf.length < 12){
	
		

		if(vercpf(cpf) == true){
		document.cltCadastro.cpf.className = "confirmValida";
			tipoValid = "CPF: ";
			if(document.cltCadastro.clt.value != ""){
			
			adicionaClt();
			ctrlcCpf(cpf)
			}
		return true;
			
		} else {
		document.cltCadastro.cpf.className = "erroValida";
		return false;
		}

	} else {
	if(cpf.length > 11 && cpf.length < 14){
	document.cltCadastro.cpf.className = "brancoValida";
	}
	if(cpf.length > 13){
	
		if(ValidarCNPJ(cpf) == true){
		document.cltCadastro.cpf.className = "confirmValida";
		tipoValid = "CNPJ: ";
			if(document.cltCadastro.clt.value != ""){
			
			adicionaClt();
			ctrlcCpf(cpf)
			}
		return true;
			
		} else {
		document.cltCadastro.cpf.className = "erroValida";
		return false;
		}
	}

	}
	

}


function validaNome(){



if(document.preCadastro.nome.value.length > 2){
var nome = document.preCadastro.nome.value;


	if (nome.indexOf(" ") != -1){

		cont1++;
		

	}

	

	if(cont1 > 1 && (tecla_pressionada() == 32 || tecla_pressionada() == 13)){
		
	//alert(cont1 + " Alo");

	document.preCadastro.pa.focus();
	}
}

}


function validaPa() {

 var regra = /^[0-9]+$/;


if(document.preCadastro.pa.value.match(regra)){
	if(document.preCadastro.pa.value.length > 3 && document.preCadastro.nome.value != ""){

	cadastraAN();

	}
} else {
document.preCadastro.pa.value = "";
}

}

//**************************************************************************************************

function voltar(){

if(conCf == 2){
	if(confirm("Tem certeza que deseja voltar?")){

	conCf = 3;
  
	}
}

if(conCf == 3 || conCf == 1){

//conCf = 1;
cont1 = 0;
  
var cadastroAN = "<table border='0'><tr><td><spam class='titulos'>&nbsp;&nbsp;Nome &nbsp;&nbsp;</span></td> <td><input name='nome' type='text' onkeyup='validaNome();'></input></td></tr><tr><td><spam class='titulos'>&nbsp;&nbsp;PA &nbsp;&nbsp;</span></td><td><input name='pa' type='text' onkeyup='validaPa();' maxlength='50'></input></td></tr></table><br><input type='button' value='Registrar' onclick='cadastraAN();'>";

document.getElementById('cadastro').innerHTML = cadastroAN;

document.getElementById('cabecalho').innerHTML = "";

document.getElementById('cltPassado').innerHTML = "";

document.getElementById('cltAtual').innerHTML = "";

document.getElementById('obs').innerHTML = "";
}

}


function ctrlcNome(nome,pa,an){

copyToClipboard(capitalize(an) + " / " + pa + " / Falei com Senhor(a) " + capitalize(nome));

}

function ctrlcCpf(cpf){

copyToClipboard(cpf);

}

function ctrlcRelatorio(copia){

copyToClipboard(capitalize(copia));

}




function corrigeClt() {
var cltAtualDisplay2 = tipoValid + cpfG;
var func3 = "javascript:corrigeClt()"; //Imagem
var func2 = "javascript:onDblClick(ctrlcCpf(cpfG))"; //Parei aqui

//ctrlcCpf(cpf);

	document.getElementById('cltAtual').innerHTML = "<form name='frmCorrige'><input style='width: 110px; height: 20px;' name='corrige' type='text'></input><input onclick='corrigir();' type='button' value='Corrigir'> " + "<br>" +cltAtualDisplay2.link(func2)  + "<br><br></form>";
	
	document.frmCorrige.corrige.focus();
	

	listaClt.pop();

}


function corrigir() {

	if(document.frmCorrige.corrige.value != ""){

	var cltCorrige = document.frmCorrige.corrige.value;



	var cltAtualDisplay1 = "Cliente: " + cltCorrige;
	var cltAtualDisplay2 = tipoValid + cpfG;
	var cltAtualDisplay3 = "&nbsp <img src='http://images.all-free-download.com/images/graphiclarge/notepad_100541.jpg' border='0' height='12' width='12'>";

	nomeG = cltCorrige;
	rolaA = 0;

	var func1 = "javascript:onDblClick(ctrlcNome(nomeG,paG,anG))"; //Parei aqui
	var func2 = "javascript:onDblClick(ctrlcCpf(cpfG))"; //Parei aqui
	var func3 = "javascript:corrigeClt()"; //Imagem







document.getElementById('cltAtual').innerHTML = cltAtualDisplay1.link(func1) + cltAtualDisplay3.link(func3) + "<br>" +cltAtualDisplay2.link(func2)  + "<br><br>";

salvaClt(nomeG, cpfG);

	} else {
	corrigeClt();
	}

}



//////////////////////////////////



function adicionaClt() {
	
	var clt = document.cltCadastro.clt.value;
	var cpf = document.cltCadastro.cpf.value;
	
	nomeG = clt;
	cpfG = cpf
	//obsG = document.frmObs.obs.value;


	var cltAtualDisplay1 = "Cliente: " + clt;
	var cltAtualDisplay2 = tipoValid + cpf;
	var cltAtualDisplay3 = "&nbsp <img src='http://images.all-free-download.com/images/graphiclarge/notepad_100541.jpg' border='0' height='12' width='12'>";
	
	var func1 = "javascript:onDblClick(ctrlcNome(nomeG,paG,anG))"; //Parei aqui
	var func2 = "javascript:onDblClick(ctrlcCpf(cpfG))"; //Parei aqui
	var func3 = "javascript:corrigeClt()"; //Imagem
	

	//alert(clt.lastIndexOf("f"));	

	if(vercpf(cpf) == true){
	

	ctrlcCpf(cpf);
	document.getElementById('cltAtual').innerHTML = cltAtualDisplay1.link(func1) + cltAtualDisplay3.link(func3) + "<br>" +cltAtualDisplay2.link(func2)  + "<br><br>";
	
	document.frmObs.obs.value = "";
	rolaA = 0;
	salvaClt(clt, cpf);

document.cltCadastro.clt.focus();


	} else {
	
	if(ValidarCNPJ(cpf) == true){


	ctrlcCpf(cpf);
	document.getElementById('cltAtual').innerHTML = cltAtualDisplay1.link(func1) + "<br>" +cltAtualDisplay2.link(func2)  + "<br><br>";
	

	
	document.frmObs.obs.value = "";
	rolaA = 0;
	salvaClt(clt, cpf);

	}

        }
	
		

		document.cltCadastro.cpf.value = "";	
		document.cltCadastro.clt.value = "";
			rolaA = 0;

		document.cltCadastro.cpf.className = "brancoValida";
	}













//FUNÇÃO SALVA CLINETE (LINSTA)
////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var rolaA = 0;
var rolaB = 0;

function rolaMais(){
rolaA++;
salvaClt("", "");
}

function rolaMenos(){
rolaA--;
salvaClt("", "");
}


function salvaClt(nome, cpf){

var pg = 8;

var paginacao;
var i;
var nomeFormat = capitalize(nome);

var fimI;

var arq = "Ola";
var textoX = "Ola Mundo";

var proximo = "<a class='nav' href='javascript:onMouseOut(rolaMenos())'>Proximo</a>";
var anterior = "<a class='nav' href='javascript:onMouseOut(rolaMais())'>Anterior</a>";

//var anterior = "<a class='nav' href='javascript:onMouseOut(gravaArquivo())'>Anterior</a>";





estruturaFim = "";
if(nome != ""){
listaClt.push(nomeFormat + "<td> "+ tipoValid + cpf +"</td>");
listaGravador.push(paG + " " + nome + " " + cpf);

var hora    = hoje.getHours();          // 0-23
var min     = hoje.getMinutes();        // 0-59


listaRelatorio.push("PA: " + paG + "\n" + "Cliente: " + nome + "\n" + "CPF: " + cpf + "\n" + dia+"-"+(mes+1)+"-"+ano + " " + hora + ":" + min + "\n\n");
listaRelatorioObs.push("Observações: " + obsG) ;
}

if(-(pg) < (listaClt.length*-1)){

paginacao = 0;

} else {
paginacao = (listaClt.length-pg);
}
//alert(listaClt.length-pg);

//alert(rolaA);

//i = i - rolaA;
//paginacao = paginacao + rolaA;

	for(i = (listaClt.length-rolaA);i > paginacao - rolaA;i--){
     
	estrutura = "<tr><td>" + i + " " + listaClt[i-1] + " </td></tr>";
	
	estruturaTexto = listaGravador[i-1] + "\n";

	estruturaTextoFim = estruturaTextoFim + estruturaTexto;
	
	estruturaFim = estruturaFim + estrutura;
	var fimI = i;
	}


			if(listaClt.length < pg+1){

			proximo = "";
			anterior = "";

 			}

			if(rolaA < 1){

			proximo = "";

			}

			if(fimI < 2){

			anterior = "";
			}

//alert(estruturaTextoFim.replace("undefined",""));


	
	///////////

	//gravaArquivo();	

	//////////


document.getElementById('cltPassado').innerHTML = proximo +"<table id='salvo'>" + estruturaFim + "</table> " + anterior;
estruturaFim = "";
}

///////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\










function vercpf(cpf){

if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
return false;
add = 0;
for (i=0; i < 9; i ++)
add += parseInt(cpf.charAt(i)) * (10 - i);
rev = 11 - (add % 11);
if (rev == 10 || rev == 11)
rev = 0;
if (rev != parseInt(cpf.charAt(9)))
return false;
add = 0;
for (i = 0; i < 10; i ++)
add += parseInt(cpf.charAt(i)) * (11 - i);
rev = 11 - (add % 11);
if (rev == 10 || rev == 11)
rev = 0;
if (rev != parseInt(cpf.charAt(10)))

return false;
return true;

}


function copyToClipboard(text)
{
    if (window.clipboardData) // Internet Explorer
    {  
        window.clipboardData.setData("Text", text);
    }
   
}

function capitalize(txt) {
        if (txt == null || txt.length == 0) return "";
        txt = txt.toLowerCase();
        return txt.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
}



function ValidarCNPJ(cnpj) {
 
	//cnpj = cnpj.replace(/[^\d]+/g,'');
 
	if(cnpj == '') return false;
	
	if (cnpj.length != 14)
		return false;
 
	// Elimina CNPJs invalidos conhecidos
	if (cnpj == "00000000000000" || 
		cnpj == "11111111111111" || 
		cnpj == "22222222222222" || 
		cnpj == "33333333333333" || 
		cnpj == "44444444444444" || 
		cnpj == "55555555555555" || 
		cnpj == "66666666666666" || 
		cnpj == "77777777777777" || 
		cnpj == "88888888888888" || 
		cnpj == "99999999999999")
		return false;
		
	// Valida DVs
	tamanho = cnpj.length - 2
	numeros = cnpj.substring(0,tamanho);
	digitos = cnpj.substring(tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (i = tamanho; i >= 1; i--) {
	  soma += numeros.charAt(tamanho - i) * pos--;
	  if (pos < 2)
			pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(0))
		return false;
		
	tamanho = tamanho + 1;
	numeros = cnpj.substring(0,tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (i = tamanho; i >= 1; i--) {
	  soma += numeros.charAt(tamanho - i) * pos--;
	  if (pos < 2)
			pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(1))
		  return false;
		  
	return true;
   
}







/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

