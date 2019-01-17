const morgan = require('morgan')
const express = require('express')
const models= require('./models')
const app = express()
const PORT = 3000;

//VIEWS:
const layout = require('./views/layout')
const index = require('./views') //require auto looks for something inside called "index.js"

//ROUTERS:
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

app.use(express.urlencoded({ extended: false })) //later test: {extended: true}
app.use(express.static(__dirname + "/public")) //later test: "./public"

app.use('/wiki', wikiRouter)

app.get('/', (req,res,next)=>{
  res.redirect('/wiki')
  // res.send(layout(''))
})

const init = async() => {
  await models.db.sync()
  app.listen(PORT, () => {
    console.log(`Hello! I'm listening on port ${PORT}`);
  });
}

init()

//ABSOLUTE PATH = where the FILE actually is: /Users/kirstenlindsmith/Documents/Fullstack/Junior_Phase/wikistack/index.js
//RELATIVE PATH = where my cd is: ./index.js
