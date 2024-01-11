function multiplica (n01: number, n02: number): number{
    return n01 * n02;
}

let valor: number = multiplica(3, 2);
console.log("O resultado é:", valor);

let nome2 = new String("João");
let saudacao = new String ("Olá ");
let frase = saudacao.concat(nome2.toString());
console.log(frase)