
//Cria Objeto ActiveX
//var dados = new ActiveXObject("Scripting.FileSystemObject");



///////////////////////////////////////////////////////////////////////////////////// ESTRUTURA DATA

hoje = new Date()
dia = hoje.getDate()
mes = hoje.getMonth()
ano = hoje.getFullYear()




if (dia < 10)
dia = "0" + dia
if (ano < 2000)
ano = "19" + ano

//O mes come�a em Zero, ent�o soma-se 1
//alert(dia+"/"+(mes+1)+"/"+ano) 


///////////////////////////////////////////////////////////////////////////////////// GRAVAR


//Fun��o para gravar o arquivo
function gravaArquivo(){

//If (str_fso.FileExists("c:\" & str_arquivo &".txt")) Then
//response.write "Este arquivo ja Existe !!!"
//Else


var arq;
var texto = estruturaTextoFim.replace("undefined","");

//alert(texto);

//se o parametro arq que � o nome do arquivo vier vazio ele salvar� o arquivo com o nome �Sem Titulo�

//carrega o txt




arq = "//fileserver01/Opera��o/Agentes/Isaac Lopes/Nova pasta/bdados/" + anG;

	//alert(dados.FolderExists(arq))

	if(dados.FolderExists(arq)){

	//alert("ja existe")
			
	
	} else { 

	//alert("Criando Pasta");
	dados.CreateFolder(arq);
		
	}


	 arq = "//fileserver01/Opera��o/Agentes/Isaac Lopes/Nova pasta/bdados/" + anG + "/" + dia+"-"+(mes+1)+"-"+ano;


		if(dados.FileExists(arq + ".txt")){

		
		//alert("Abrindo arquivo");
		
		var abrir = dados.OpenTextFile(arq + ".txt", 2, true);

    	        abrir.WriteLine(texto);

		abrir.Close();

		} else {
		
		//alert("Criando Arquivo");
	
		var esc = dados.CreateTextFile(arq+".txt", false);

		//escreve o que foi passado no parametro texto que � o texto contido no TextArea

		esc.WriteLine(texto);
		
		esc.Close();
		}





}



///////////////////////////////////////////////////////////////////////////////////// ABRIR


//Fun��o para abrir o arquivo
function abreArquivo(arq){
//o parametro arq � o endere�o do txt
//carrega o txt
var arquivo = dados.OpenTextFile(arq, 1, true);
//varre o arquivo
while(!arquivo.AtEndOfStream){
//escreve o txt no TextArea
document.getElementById("texto").value = arquivo.ReadAll();
}
//fecha o txt
arquivo.Close();
}

////////////////////////////////////////////////////////////////////////////////////
