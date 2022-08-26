const database = require("./database");

let dados = [
  {
    nome: "Monster Hunter World",
    preco: 65.40
  },
  {
    nome: "Devil may cray",
    preco: 30.50
  },
  {
    nome:'WOW',
   preco:120
  }
]
let query = database.insert(dados).into("games").then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
});
