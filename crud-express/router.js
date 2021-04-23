const express = require('express')
const router = express.Router()
const fs = require('fs')
const students = require('./persons.js')

router.get('/', (req,res)=>{
    // fs.readFile('./db.json','utf8',(error,data)=>{
    //     if(error){
    //         return res.status(500).send('server error')
    //     } 
    students.find(function(err,students){
        if (err){
        return res.status(500).send('server error')
        }
        res.render('index.html',{
            // students:JSON.parse(data).students
            students:students
        })
    })      
})    


router.get('/new', (req,res)=>{
    res.render('new.html')
})
router.post('/new', (req,res)=>{
    students.save(req.body,function(err){
       if(err){
        return res.status(500).send('server error')
       }
       res.redirect('/')
    })
})

module.exports = router
