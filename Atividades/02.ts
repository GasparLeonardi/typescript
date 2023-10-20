interface User {
    nome: string
    dtanascimento: string
    nickname: string
    mail: string
    senha: string
}

const User1 : User = {
    nome: "Rhyan",
    dtanascimento: "01/01/2000",
    nickname: "Satoro",
    mail: "rhyan@gmail.com",
    senha: "abc123"
}

const User2 : User = {
    nome: "Julia",
    dtanascimento: "01/01/2000",
    nickname: "Satora",
    mail: "julia@gmail.com",
    senha: "abc123"
}

//retornar users

function listarUser(varuser : User) {
    return `${varuser.nome} ${varuser.nickname}`;
}

console.log(listarUser(User1))
console.log(listarUser(User2))