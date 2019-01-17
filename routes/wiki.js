const express = require('express')
const router = express.Router()
const {addPage, main} = require('../views')


router.get('/', (req, res, next)=>{
  // res.redirect('/wiki')
  res.send(main())
})

router.post('/', (req,res,next)=>{
   //res.send('got to the post thing')
  res.json(req.body)
})

router.get('/add', (req, res, next)=>{
  res.send(addPage())
})

module.exports = router

