//DECLARAÇÕES E VARIAVEIS
var nome="Tralalero Tralala";
console.log(nome)

let idade =18;
console.log(idade)

const sobrenome = "Cidade";
console.log(sobrenome)

let aula;
console.log(aula)

let valor= null;
console.log(valor)

let exemplo1={};

let exemplo2=[];

//TIPOS VARIAVEIS
let exemplo3 = 10;
console.log(typeof exemplo3)

let exemplo4='Aula'
console.log(typeof exemplo4)

let exemplo5=true;
console.log(typeof exemplo5)

let exemplo6=["huguinho,zezinho,luizimho"]
console.log(typeof exemplo6)
//CONVERSÕES

//float => inteiro
let numFloat =123.456;
console.log(parseInt(numFloat));

//string => float
let numString ="547.753"
console.log(parseFloat(numString));

//float => string

let numFloat1 ="699.696"
console.log(numFloat1.toString());

let numInt=100;
console.log(numInt.toString());

//MÉTODOS PARTE-1

//LENGTH- VERIFICA O TAMANHO DA STRING

let frase ="O munda da tecnologia";
console.log(frase.length)

//indexOf- RETORA UM TECHO DE UM TEXTO

let texto="Programação Sustentável";
console.log(texto.indexOf("g"))

//SLICE- RETORNA PARTE DE UM TEXTO APONTANDO O INICIO E O FIM

let info="Processamento de ponta";
console.log(info.slice(0,18))


//OPERADORES ARITIMÉTICOS

const num1 =10;
const num2 =20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);


//OPERADORES LÓGICOS

const num3 =20;
const num4 =30;

console.log(num3 < num4);
console.log(num3 > num4 && num4 < 50);
console.log(num3 > num4 || num4 > num3)
console.log(num3 == num4 || num4 <= num3)


