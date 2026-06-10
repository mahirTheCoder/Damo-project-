 const express = require('express')
 const router = express.Router()
 const authRouter = require('./authRouter')


 router.use('/auth', authRouter)
 
//  route.get('/', (req, res) => {
//    res.status(200).send('Hello World!')
//  })

 
 module.exports = router