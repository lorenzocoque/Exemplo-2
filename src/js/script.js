 //DECLARAÇÕES E VARIAVEIS
// var nome="Tralalero Tralala";
// console.log(nome)

// let idade =18;
// console.log(idade)

// const sobrenome = "Cidade";
// console.log(sobrenome)

// let aula;
// console.log(aula)

// let valor= null;
// console.log(valor)

// let exemplo1={};

// let exemplo2=[];

// //TIPOS VARIAVEIS
// let exemplo3 = 10;
// console.log(typeof exemplo3)

// let exemplo4='Aula'
// console.log(typeof exemplo4)

// let exemplo5=true;
// console.log(typeof exemplo5)

// let exemplo6=["huguinho,zezinho,luizimho"]
// console.log(typeof exemplo6)
// //CONVERSÕES

// //float => inteiro
// let numFloat =123.456;
// console.log(parseInt(numFloat));

// //string => float
// let numString ="547.753"
// console.log(parseFloat(numString));

// //float => string

// let numFloat1 ="699.696"
// console.log(numFloat1.toString());

// let numInt=100;
// console.log(numInt.toString());

// //MÉTODOS PARTE-1

// //LENGTH- VERIFICA O TAMANHO DA STRING

// let frase ="O munda da tecnologia";
// console.log(frase.length)

// //indexOf- RETORA UM TECHO DE UM TEXTO

// let texto="Programação Sustentável";
// console.log(texto.indexOf("g"))

// //SLICE- RETORNA PARTE DE UM TEXTO APONTANDO O INICIO E O FIM

// let info="Processamento de ponta";
// console.log(info.slice(0,18))


// //OPERADORES ARITIMÉTICOS

// const num1 =10;
// const num2 =20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);


 //OPERADORES LÓGICOS

 // const num3 =20;
 // const num4 =30;

 // console.log(num3 < num4);
 // console.log(num3 > num4 && num4 < 50);
 // console.log(num3 > num4 || num4 > num3)
 // console.log(num3 == num4 || num4 > num3)

//OPERADORES DE COMPARAÇÃO
// const num5 =25;
// const num6 =35;

// console.log(num5 == num6); //compara
//console.log(num5 === num6); //compara e verifica o tipo da variavel
//console.log(num5 != num6); //diferente

//ESTRUTURA CONDICIONAL

//IF

// let valor = 100;


// if(valor == 100){
//  console.log("é verdadeiro")
// }

//if\else

// let valor1=130;

// if(valor1 == 100){
//     console.log("Valor Correto")
// }else{
//     console.log("Valor Errado")
// }

//if\else - encadeoado ou aninhado

// let idade = 51;

// if(idade <= 14){
//     console.log("Não pode entrar")
// }
// else if(idade >= 14 && idade <18){
//     console.log("Pode entrar")
// }
// else if(idade > 50 && idade < 70){
//     console.log("Você não tem idade pra isso seu velho do krl")
// }
// else{
//     console.log("Fica em casa assistindo sua novela")
// }

//Condição ternaria

// let valor2 = 300;

// let resultado = valor2 == 300 ? "Certo": "Errado";
// console.log(resultado)


//SWITCH CASE

// let time = "Palmeiras";

// switch(time){
//     case "Palmeiras":
//         console.log("Melhor Time")
//         break
//     case "Flamengo":
//         console.log("Não é time")
//        break;
//     default:
//         console.log("Nenhuma das opções")
// }

//ESTRUTURA DE LAÇO DE REPETIÇÃO

// for(let i=0;i<10;i++){
//     console.log("O valor de I é :", i)
// }

//WHILE

let w=0

while(w<=10){
    console.log("O valor de w é ",w)
    w++
}


//do While

let z=10
do{
    console.log("do while é",z)
    z++;
}while(z <= 100)