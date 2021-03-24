const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

const [num1, num2, ...outrosNumeros]  = [1, 2, 3, 4, 5];

const [nome1 = 'le'] = [];

const Leandro = {
    nome:'LE',
    idade: 32
};

const LeandroComTelefone = 

{...Leandro, telefone:17991142014};

const {nome} = Leandro;
const {idade} = Leandro;

function imprimeDados(dados) {
   const {nome, idade} = dados;
    console.log(nome,idade);
}
imprimeDados(Leandro);

function imprimeDados({nome, idade}) {
    console.log(nome,idade);

}
imprimeDados(Leandro);

console.log(numeros);
console.log(num1,num2,outrosNumeros);
console.log(nome1);
console.log(Leandro,LeandroComTelefone);
console.log(nome);
console.log(idade);

