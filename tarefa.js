const alunos = [
    { nome: 'João' , nota: 2},
    { nome: 'Maria', nota: 6},
    { nome: 'Pedro', nota: 4},
];

const aprovado = alunos.some(function(item) {
return item.nota >= 6
})

console.log(aprovado);
