 const express = require('express')
 const router = express.Router()
 const authRouter = require('./authRouter')


 router.use('/auth', authRouter)
 
//  route.get('/', (req, res) => {
//    res.status(200).send('Hello World!')
//  })


// # DB_URL= mongodb+srv://damo_project:zxp2nBriRDsn5vDZ@cluster0.mjewgzf.mongodb.net/damo_project?appName=Cluster0

// # JWT_SEC=kdfjdfhnjdhfkjdfh

// # cloud_name=db21zycb0
// # api_key=719945338933261
// # api_secret=ib6hKRYUnP1VsWYhRUlCCvWpAcc

 
 module.exports = router