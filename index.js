const database = require("./database");
/*
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
*/
/*
database.select(["id","preco"]).table("games").then(data => {
  console.log(data)
}).catch(err => {
  console.log(err)
})
*/
let query = database.insert({nome :"Mists of noyah",preco:25}).into("games").then(data => {
  database.select().table("games").then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
  console.log(data)
}).catch(err => {
  console.log(err)
});