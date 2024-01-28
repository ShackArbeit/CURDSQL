import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

let Conntection=mysql.createConnection({
      host:"localhost",
      database:"studentdb",
      user:"root",
      password:"wang8119"
})

const app=express()
app.use(cors())
app.get('/',(req,res)=>{
      const sql='select * from studentdata';
      Conntection.query(sql,(err,result)=>{
            if(err)return res.json({Message:'Error inside Server'})
            return res.json(result)
      })
})


app.listen(8000,()=>{
      Conntection.connect(function(err){
            if(err) throw err
            console.log('Database Connect !!')
      })
      console.log('App Listening On Port 8000 Now !')
})