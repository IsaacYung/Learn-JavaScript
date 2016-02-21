//Variaveis

var idd = 0;
var id = 0;
var i; //contador 1

var transporte = "";

//Vetores


//Var de conteudo


func1 = "javascript:tutorial();";
	

funcS = "javascript:positivo();";
funcN = "javascript:negativo();";

opSim = "Sim";
opNao = "Não";



//EXECUTA TUTORIAL ****************************************************** FUNÇÃO

function tutorial(ids){
id = ids;

alert(idd + " " + id);

if (id == 0){

op0();

}


}


//ATUALIZA ****************************************************** FUNÇÃO

function atualiza() {

for(i = 0;i<opcoes.length;i++) {

transporte = transporte + opcoes[i].link('javascript:tutorial(' + i + ')');


}



jQuery('#ai').html(transporte);
 
}

/////////////////////////////////////////////////////

//POSITIVO ****************************************************** FUNÇÃO

function positivo() {

aisup[id].passo[idd] = 1;
tutorial(id);

//alert(aisup[id].passo[idd])
}

//NEGATIVO ****************************************************** FUNÇÃO

function negativo() {

aisup[id].passo[idd] = 0;
tutorial(id);

//alert(aisup[id].passo[idd])
}


function op0(){

///////////////////////PERGUNTA//////////////////////////////
	//Estrutura de ifs

	if(idd == 0){ //Pimeiro

	jQuery('#ai').html(aisup[0].despiste[idd] + "<br>" + opSim.link(funcS) + " " + opNao.link(funcN));
		

	}

	if(idd == 1){ //Pimeiro

	jQuery('#ai').html(aisup[0].despiste[idd] + "<br>" + opSim.link(funcS) + " " + opNao.link(funcN));
		

	}
	if(idd == 2){ //Pimeiro

	jQuery('#ai').html(aisup[0].despiste[idd] + "<br>" + opSim.link(funcS) + " " + opNao.link(funcN));
		

	}
///////////////////////RESPOSTA//////////////////////////////
	if(aisup[id].passo[0] == 1){ //Pimeiro
	idd = 2;
	jQuery('#passo').html(aisup[0].resposta[idd]);
	}


	if(aisup[id].passo[1] == 1){ //Pimeiro
	idd = 1;
	jQuery('#passo').html(aisup[0].resposta[idd]);
	}

	if(aisup[id].passo[0] == 0){ //Pimeiro
	idd = 0;
	jQuery('#passo').html(aisup[0].resposta[idd].link());
	}

}
