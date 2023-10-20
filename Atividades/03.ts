interface Produto {
    nome: string
    valor: number
    categoria: string
}

let produto1: Produto = {
    nome: "PC Gamer",
    valor: 4000,
    categoria: "Computadores e Celulares"
}

let produto2: Produto = {
    nome: "iPhone 14",
    valor: 6000,
    categoria: "Computadores e Celulares"
}

const listaProdutos: Produto[] = [produto1, produto2];
console.log(...listaProdutos);