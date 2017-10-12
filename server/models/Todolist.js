const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodolistSchema = new mongoose.Schema(
  {
    email: String,
    tgl: { type: Date },
    priority: String,
    task: String,
    status: String
  }
)

Todolist = mongoose.model('Todolist', TodolistSchema);

module.exports = Todolist;
