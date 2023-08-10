const express = require('express')
const path = require('path')

const app = express()
app.use('/html', express.static('html'))
app.use('/assets', express.static('assets'))
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))

app.get('/', (req,res)=>{
    // res.send('hello')
      res.sendFile(path.join(__dirname, "/html/index.html"))
})

app.listen(2300, ()=>{
    console.log("there")
})