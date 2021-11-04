const express = require('express')
const layout = require('express-ejs-layouts')
const fs = require('fs')


const app = express()

app.use(layout)
app.set('view engine', 'ejs')

app.use(express.static('static'))

let abi = fs.readFileSync(__dirname+'/views/abi.json')

abi = abi.toString()

app.get('/', (req, res) => {
    res.render('index', {abi: abi, isLogin: false})
})

app.get('/home', (req, res) => {
    res.render('home', {abi: abi, isLogin: true})
})

app.get('/doc', (req, res)=>{
    res.render('user/doctor_view', {abi: abi, isLogin: true, doctor: req.query.abx})
})

app.get('/record', (req, res)=>{
    res.render('user/record',{abi: abi, isLogin: true, id:req.query.id})
})

app.get('/register', (req, res)=>{
    res.render('register', {abi: abi, isLogin: false})
})

app.get('/doctor-home', (req, res)=>{
    res.render('doctor/home', {abi: abi, isLogin: true})
})

app.get('/doc_view_record', (req, res)=>{
    res.render('doctor/view_record', {abi, isLogin: true, id: req.query.id})
})

app.get('/doctor-add-record', (req, res) => {
    res.render('doctor/add_record', {abi, isLogin: true})
})

app.listen(5002, ()=> console.log("Server listening on 5002"))