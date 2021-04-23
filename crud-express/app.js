const express = require('express')
const fs = require('fs')
const path = require('path')
const router = require('./router')
const bodyparser = require('body-parser')

app = express()
app.use(express.static('public'))
console.log(path.join(__dirname,'public'))


app.use(express.json())
app.use(express.urlencoded());

app.use(router)

app.engine('html', require('express-art-template'))

app.listen(3000,()=>{
    console.log('server is running')
})