/*
	objeto que tendra de atributo cada sistema de numero. Sus metodos serian para convertir los otros 
	tres numeros al sistema decimal, para convertirlo con la functiontoString(n) siendo n = 2,8,16 base 
	correcpondiente de cada sistema 
*/

function Conversor(dec, bin, hex, oct){
	this.decimal = dec;
	this.binario = bin;
	this.hexadecimal = hex;
	this.octal = oct;
	this.dividirParteEntera = function (n){
		separador = ".";
	    arreglo = n.split(separador);
	    return arreglo[0];		
	}
	this.dividirParteDecimal = function (n){
		separador = ".";
	    arreglo = n.split(separador);
	    return arreglo[1];	
	}
	this.tieneParteDecimal = function(n){

		
	}

}


Conversor.prototype.binarioDecimal = function (n) {

	if( n.lastIndexOf(".") == -1 ){ // entonces no tien (.) en entero el numero
		entera = n;
		decimal = null;
	}else{
		var entera = this.dividirParteEntera(n);
		var decimal = this.dividirParteDecimal(n);
	    var tamD = decimal.length;
	    var sw = 0;
	}

	var tamE = j = entera.length, sumE = 0, sumD = 0;
	j-=1;
	for (var i = 0; i < tamE; i++) {
	   	if(entera[i] == "1"){
	   		sumE = sumE + Math.pow(2,j);
	   	}
	   	j--;
	}
	j = -1;
    for (var i = 0; i < tamD && decimal != null; i++) {
    	if(decimal[i] == "1"){
    		sumD = sumD + Math.pow(2,j);
    	}
    	j--;
    }
    alert("Entera: " + sumE + "\n Decimal: " + sumD);
}

Conversor.prototype.hexadecimalDecimal = function (){
   	var entera = this.dividirParteEntera(n);
	var decimal = this.dividirParteDecimal(n);

}

Conversor.prototype.octalDecimal = function (){
	var entera = this.dividirParteEntera(n);
	var decimal = this.dividirParteDecimal(n);


}

var numero = new Conversor(0,0,0,0);
numero.binarioDecimal("10110.01101");



//recorre el formulario, para saber cual de los campo es el que trae dato y lo retorna
function validacionFormulario() {
	input = null;
	if(document.forms.length > 0) {
		for (var i = 0; i < (document.forms[0].length - 2) && input == null; i++) {
			var campo = document.forms[0].elements[i];
			if( campo.value != ""){
				input = campo;
			}
		} 
	}
	return input;
}

function validarDecimal(valor) {
	var estado = true;
	for (var i = 0; i < valor.value.length && estado == true; i++) {
		if( !(valor.value[i] >= "0" && valor.value[i] <="9" || valor.value[i] == ".") ){
			estado = false;
		}
	}
	return estado;
}

//validando que el numero sea binario solo este entre cero(0) y uno(1)
function validarBinario(valor){
	var estado = true;
	for (var i = 0; i < valor.value.length && estado == true; i++) {
		if( !(valor.value[i] >= "0" && valor.value[i] <="1" || valor.value[i] == ".") ){
			estado = false;
		}
	}
	return estado;
}

//validando que el numero sea octal
function validarOctal(valor){
	var estado = true;
	for (var i = 0; i < valor.value.length && estado == true; i++) {
		if( !(valor.value[i] >= "0" && valor.value[i] <="7" || valor.value[i] == ".") ){
			estado = false;
		}
	}
	return estado;
}

//validando que el numero sea hexadicimal correctamento convirtiendo la cadena en mayudacalas 
function validarHexadecimal(valor){
	var estado = true, texto = valor.value.toUpperCase();
	for (var i = 0; i < texto.length && estado == true; i++) {
		if( !(texto[i] >= "0" && texto[i] <= "9") && !(texto[i] >="A" && texto[i] <= "F" && texto[i] != ".") ){
		 	estado = false;
		}
	}
	return estado;
}

/*
	retornara true o falso, si es true ya el numero sera valido para convertirde un tipo a otro
	de ser false pasara lo contrario
 */
function validarCampos(){
	var valorInput = validacionFormulario();
	var estado = false;
	if( valorInput == null ){
		alert("Por favor ingrese valores en algun campo");
	}else{
		if(valorInput.name == "decimal"){
			estado = validarDecimal(valorInput);
		}else if(valorInput.name == "binario"){
			estado = validarBinario(valorInput);
		}else if(valorInput.name == "hexadecimal"){
			estado = validarHexadecimal(valorInput);
		}else if(valorInput.name == "octal"){
			estado = validarOctal(valorInput);
		}

		if(estado == false){
			alert("Ingrese valores valido en el campo " + valorInput.name);
		}
	}
	return estado;
}

//funcion que hace la conversion; boton convertir
function convertir(){
	var siguientePaso;
	siguientePaso = validarCampos();
	if (siguientePaso == true){
		alert("ok");
	}
	
}

//funcion que hace el reset; boton reset
function resetForm(){
	document.getElementById("formulario").reset();
}


//
/*
	var binario = document.getElementById("binario").value;
	var num = 123.456789; 
	alert("Todos: "+num); 
	num0 = num.toFixed(0);//sirve  
	alert("Parte entera: "+num0);

	lista.push("1");
	lista.push(1);
	lista.push("wq.");
	var no = "";
	for (var i in lista) {
		no = no.concat(lista[i]);
	}
	alert(no);


	var z = "1012101";
	for (var i = 0; i < z.length; i++) {
		if (z[i] < "0" || z[i] > "1"){
			alert(z[i]  + " erro");
		}else{
			alert(z[i] + " ok ");
		}
	}
*/
	