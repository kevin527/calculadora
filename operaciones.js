function capturar(num){

	var anterior=document.kevin.valores.value;
	document.getElementById("valores").value=anterior+num;
}



function borrar()
{
	document.kevin.valores.value="";

}

//Signos
function comprobar(num){

	var anterior=document.kevin.valores.value;
	if(anterior==""){
		document.kevin.valores.value="";
    }else{
    	var anterior=document.kevin.valores.value;
    	document.getElementById("valores").value=anterior+num;
    	esto=document.kevin.valores.value;

		record=0;
		igual=1;
		var letraRecord
		var b=0;
		var letra=""

		for(a=1;a<esto.length;a++){
			if(esto.charAt(a)=="+"||esto.charAt(a)=="-"||esto.charAt(a)=="*"||esto.charAt(a)=="/"){
				igual=igual+1;
				letra=esto.charAt(a);
			}else{
				if(igual>record){
					record=igual;letraRecord=letra
				}
				igual=1
			}
			b=a

		}
		if(igual>record){
			record=igual;
			letraRecord=letra;
		}
		if(record>2){
			var anterior=esto;
			var nuevovalor=anterior.substring(0, anterior.length-1);
			document.getElementById("valores").value=nuevovalor;
			record=0; b=0; igual=1; letra="";letraRecord="";
		}
	}
}



function calcular(){

	var resultado=eval(document.kevin.valores.value);
	document.kevin.valores.value=resultado;
}