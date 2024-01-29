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
app.use(express.json())
app.get('/',(req,res)=>{
      const sql='select * from studentdata';
      Conntection.query(sql,(err,result)=>{
            if(err)return res.json({Message:'Error inside Server'})
            return res.json(result)
      })
})

app.post('/student',(req,res)=>{
      const sql = 'INSERT INTO studentdata(`Name`, `Email`) VALUES (?, ?)';
      const values=[
            req.body.Name,
            req.body.Email
      ]
      Conntection.query(sql, values, (err, result) => {
            if (err) {
              console.error('MySQL Error:', err);
              return res.json({ Message: 'Could not insert student data !!' });
            }
            return res.json(result);
      });
})

app.get('/read/:id',(req,res)=>{
      const sql='select * from studentdata where id=?';
      const id=req.params.id;
      Conntection.query(sql,[id],(err,result)=>{
            if(err)return res.json({Message:'Error inside Server'})
            return res.json(result)
      })

})
app.put('/update/:id',(req,res)=>{
      const sql = 'UPDATE studentdata SET `Name`=?, `Email`=? WHERE id=?';
      const id=req.params.id;
      console.log(id)
      Conntection.query(sql,[req.body.Name,req.body.Email,id],(err,result)=>{
            if(err)return res.json({Message:'Error update student Data !!'})
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