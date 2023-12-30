const { timeStamp } = require('console');
const mongoose = require('mongoose')
const {Schema} = mongoose;
const kritiksSchema = new Schema({
    nama : {type : String, require : true, title : 'Nama', default : "pengirim"},
    email : {type : String, require : true, title : 'Email'},
    isi : {type : String, require : true, title : 'Isi'}
    
}, {timeStamp : true});

const kritik = mongoose.model('kritik', kritiksSchema);
module.exports = kritik;