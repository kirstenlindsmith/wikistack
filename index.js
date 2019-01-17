const morgan = require('morgan')
const express = require('express')
const db = require('sequelize')
const app = express()
const PORT = 3000;

//VIEWS:
// const addPage = require('./views/addPage.js')
// const editPage = require('./views/editPage.js')
// const main = require('./views/main.js')
// const index = require('./views/index.js')
const layout = require('./views/layout.js')
const index = require('./views') //require auto looks for something inside called "index.js"


app.use(express.urlencoded({ extended: false })) //later test: {extended: true}
app.use(express.static(__dirname + "/public")) //later test: "./public"

app.get('/', (req,res,next)=>{
  res.send(layout(''))
  //console.log(index)
})

app.listen(PORT, () => {
  console.log(`Hi! I'm listening on port ${PORT}`);
});

//ABSOLUTE PATH = where the FILE actually is: /Users/kirstenlindsmith/Documents/Fullstack/Junior_Phase/wikistack/index.js
//RELATIVE PATH = where my cd is: ./index.js
