
const fs = require('fs');

const dbPath = './db.json'

exports.find = function(callback){
    fs.readFile(dbPath, function (error,data){
        if(error){
            console.log(error)
        }
        callback(null,JSON.parse(data).students)
    })
}



exports.save = function(student,callback){
    fs.readFile(dbPath, function (error,data){
        if(error){
            console.log(error)
        }
        // callback(null,JSON.parse(data).students)
        var students = JSON.parse(data).students
        students.push(student)
        var fileData = JSON.stringify({
            students:students
        })
        fs.writeFile(dbPath,fileData,function(err){
            if(error){
                console.log(err)
            } callback(null)
        })
    })
}