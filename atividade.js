console.log(); console.log("ATIVIDADE 1 e 2: Quem sou e onde moro?")
var nome = "Lucas Matheus";

var idade = 27;

var cidade = "Paulista";

console.log("Meu nome é " + nome + ", atualmente resido na cidade de " + cidade + " em Pernambuco, e tenho " + idade + " anos.")

console.log(); console.log("ATIVIDADE 3: Realize quatro operações básicas (+,-,/,*): ")
var numero1 = 10;

var numero2 = 50;

var soma = numero1 + numero2;
console.log(soma)

var subtracao = numero1 - numero2;
console.log(subtracao)

var divisao = numero1 / numero2;
console.log(divisao)

var multiplicacao = numero1 * numero2
console.log(multiplicacao)

console.log(); console.log("ATIVIDADE 4: Cálculo de área:")
var baseTriangulo = 4;

var alturaTriangulo = 6;

var area = baseTriangulo * alturaTriangulo / 2
console.log(area)
console.log(); console.log("A área do triângulo é " + area + " unidades quadradas.")

console.log(); console.log("ATIVIDADE 5: Cálculo de média:")
var nota1 = 8;

var nota2 = 10;

var nota3 = 8;

var soma = nota1 + nota2 + nota3
console.log(soma)
var media = soma / 3
console.log(media.toFixed(2))
console.log(); console.log("A média do aluno é " + media.toFixed(2) + " e o parabenizo pela aprovação na disciplina.")

console.log(); console.log("ATIVIDADE 6: Desconto:")

var valorOriginal = 90;

var porcentagemDesconto = 15;

var valorDoDesconto = valorOriginal * porcentagemDesconto / 100
console.log(valorDoDesconto)
var valorReal = valorOriginal - valorDoDesconto
console.log(); console.log("O valor inicial é de " + valorOriginal + " e com o desconto de " + valorDoDesconto + " ficará por apenas " + valorReal + ".")

console.log(); console.log("ATIVIDADE 7: Imposto de renda:")

var salarioBruto = 30000;

var porcentagem = 20;

var descontoSimplificado = salarioBruto * porcentagem / 100

var salarioLiquido = salarioBruto - descontoSimplificado
console.log("Esse cálculo é sobre o valor bruto de " + salarioBruto + " reais mensais, sendo permitido apenas 20% de desconto sobre os rendimentos tributáveis, que significam " + descontoSimplificado + " reais mensais. Ou seja, o salário líquido é de " + salarioLiquido + " reais.")

console.log(); console.log("ATIVIDADE 8: Conversor de moedas:")
var valorInicialReal = 10;
var taxaCâmbioEuro = 5.70;
var valorFinalEuro = valorInicialReal / taxaCâmbioEuro
console.log(valorFinalEuro.toFixed(2))
console.log(); console.log("O valor de " + valorInicialReal + " reais, convertidos para o euro (EUR) fica " + valorFinalEuro.toFixed(2) + ".")

console.log(); console.log("ATIVIDADE 9: Convertendo Celcius para Fahrenheit:")

var celcius = 37;
var fahrenheit = (celcius * 9 / 5) + 32;
console.log(fahrenheit)
console.log(); console.log("A temperatura corporal em " + celcius + " º Celcius é equivalente a " + fahrenheit + " º Fahrenheit.")

console.log(); console.log ("ATIVIDADE 10: Calculadora de IMC")

var peso = 90;
var alturaAltura = 1.80;
var IMC = peso / (alturaAltura * alturaAltura)
console.log(IMC.toFixed(2))
