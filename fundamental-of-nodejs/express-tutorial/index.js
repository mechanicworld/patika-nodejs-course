const express = require('express')

const app = express();

app.get('/', (req,res) =>{
  res.status(200).send('INDEX')
} )
app.get('/about', (req,res) =>{
  res.status(200).send('ABOUT')
} )
app.get('/contact', (req,res) =>{
  res.status(200).send('CONTACT')
})

app.get('/*', (req,res) =>{
  res.status(404).send('404 Not found')
})

const port = 3000;

app.listen(port, ()=> {
  console.log(`Web server is running on ${port}`)
})