const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://ozanikusani1235:%40Ozan1235@cluster0.vvgss13.mongodb.net/?retryWrites=true&w=majority')


const kritikRouter = require('./routes/Kritik')

app.use('/kritik', kritikRouter)

app.listen(3000, () =>{
    console.log(`server terhubung pada port ${3000}`);
})