const mongoose = require('mongoose');
const kritikModel = require('../models/Kritiks');
const response = require('../responses/response');

module.exports = {
  get: async (req, res) => {
    try {
      const content = await kritikModel.find();
      response(200, content, 'menampilkan semua data', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  getSingle: async (req, res) => {
    id = req.params.id  
    try {
      const content = await kritikModel.findOne({_id:id});
      response(200, content, 'menampilkan semua data', res);
    } catch (err) {
      response(500, err, 'internal server error \n gagal menampilkan data', res);
    }
  },
  post: async (req, res) => {
    try {
        const { nama, email, isi} = req.body;
        const newKritik = new kritikModel({
        nama,
        email,
        isi,
        });
        await newKritik.save();
        response(201, newKritik, 'data berhasil di tambahkan', res);
    } catch (error) {
        console.log("error",error.message,error);
        response(500, error, 'internal server error \n gagal menambahkan data', res);
    }
  },
 
  delete: async (req, res) => {
    try {
      const id = req.params._id;
      const result = await kritikModel.findByIdAndDelete(id);
      response(200, result, 'data berhasil di hapus', res);
    } catch (error) {
      response(500, error, 'internal server error \n gagal menghapus data', res);
    }
},
};
