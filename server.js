
const express=require('express')
const cors=require('cors')

const app=express()

app.get("/first",(req,res)=>{
    res.send("Hello From Express Server!!!")
})

const person={
    name:"Abc",
    city:"Pune"
}

app.get("/second",(req,res)=>{
    res.send(person)
})

app.listen(7878,()=>{
    console.log('Server started!!!')
})