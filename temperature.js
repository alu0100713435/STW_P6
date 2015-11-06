/*"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida(valor, tipo){
    this.valor = valor;
    this.tipo = tipo;
}

function Temperatura(valor, tipo){
    Medida.call(this, valor, tipo); 
}

Temperatura.prototype = new Medida();

Temperatura.prototype.celsius = function(){
    this.valor = (this.valor * 9/5)+32;
    return (this.valor.toFixed(1)+" Farenheit");
}

Temperatura.prototype.far = function(){
    this.valor = (this.valor - 32)*5/9;
    return (this.valor.toFixed(1)+" Celsius");
}

Temperatura.prototype.calculate = function(temp) {
  var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([cCfF])/;
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    num = parseFloat(num);

    if(m[2]!==undefined){

        var e = m[2];
        e = parseInt(e);

        if(e<0){
            e = -e;
            var final = num / (10*e);
        }

        else{
            var final = num * (10*e);
        }
        
        var t = new Temperatura(final,m[3])
        var type = m[3];

        if (type == 'c' || type == 'C') {
            return (t.celsius());
        }
        else {
            return (t.far());
        }
    }
      
    else{
        var type = m[3];
        var t = new Temperatura(num,m[3])
        
        if (type == 'c' || type == 'C') {
            return (t.celsius());
        }
        else{
            return (t.far());
        }
    }
    
  }
  else {
    converted.innerHTML = "ERROR! Prueba con algo como esto '-4.2C' ";
  }
}

module.exports = Temperatura;*/

"use strict";

function Medida () {
  this.valor_;
  this.tipo_;
}

function Temperatura () {
  Medida.call(this);
}

//Temperatura hereda de Medida
Temperatura.prototype = new Medida();
//Getters
Medida.prototype.get_valor = function(){return this.valor_;}
Medida.prototype.get_tipo = function(){return this.tipo_;}
//Setters
Medida.prototype.set_valor = function(valor){this.valor_ = valor;}
Medida.prototype.set_tipo = function(tipo){this.tipo_ = tipo;}


//Constructor
Temperatura.prototype.inicializar = function(temp){

  var exp_regular = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([fFcC])/;
  var valor = temp.match(exp_regular);

  if(valor !== null){
  this.set_valor(parseFloat(valor[1]));
  this.set_tipo(valor[2]);
  }
}

//Conversor
Temperatura.prototype.calculate = function(){

  if(this.get_valor() === undefined || this.get_tipo() === undefined){
    return ("ERROR! Prueba con algo como esto '-4.2C'");
  }

  if(this.get_tipo() === 'C' || this.get_tipo() ==='c'){
    var result = (this.get_valor()*(9/5))+32;
    return ("El resultado es " + result + " " + "F");
  }

  else{
    var result = (this.get_valor()-32)*(5/9);
    return ("El resultado es " + result + " " + "C");
  }
}


module.exports = Temperatura;