function Jogador(nome, funcao, salario) {
    this.nome = nome;
    this.funcao = funcao;
    this.salario = salario;
}

function Tecnico(nome) {
    Jogador.call(this, nome, "Tecnico", 200000);
}

function Presidente(nome) {
    Jogador.call(this, nome, "Presidente", 20000);
}

const jogador1 = new Jogador("Ronaldo", "atacante", 100000000);
const tecnico1 = new Tecnico("Tite");
const presidente1 = new Presidente("Craque Neto");

console.log(jogador1);
console.log(tecnico1);
console.log(presidente1);

const nome = "Tite"
const funcao = "tecnico"
const salario = 200000

console.log(typeof nome);
console.log(typeof funcao);
console.log(typeof salario);


console.log(jogador1 instanceof Tecnico);
