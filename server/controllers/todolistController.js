const Todolist = require('../models/Todolist');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
  createTodolist: (req,res)=>{
               Todolist.create({
                   email: req.body.email,
                   tgl: req.body.tgl,
                   priority: req.body.priority,
                   task:  req.body.task,
                   status: req.body.status
                })
                .then(data=>{
                   res.send(data);
                })
                .catch(err=>{
                  res.send(err);
                })
  },
  getAllTodolist:(req, res)=> {
               Todolist.find()
               .then(hasil => {
                  res.send(hasil);
               })
               .catch(err=>{
                 res.send(err);
               })
  },
  getFindTodolist: (req, res)=>{
              Todolist.find({}).populate('user_id')
              .then(hasil => {
                  res.send({todolists:hasil});
              })
              .catch(err=>{
                res.send(err);
              })
  },
  deleteAktivitas : (req,res) => {
                var id = req.params.id;
                var o_id = new ObjectId(id);
                var query = {_id:o_id}
                Todolist.deleteOne(query)
                .then(result => {
                  res.send(result)
                })
                .catch(err => {
                  res.send(err)
                })
  },
  updateTodolist: (req, res)=>{
              var id = req.params.id;
              var o_id = new ObjectId(id);
              var query = {_id:o_id}
              console.log(query);
              Todolist.findOneAndUpdate(query,{
                tgl: req.body.tgl,
                priority: req.body.priority,
                task: req.body.task,
                status: req.body.status
              })
              .then(result=>{
                res.send(result);
              })
              .catch(err=>{
                  res.send(err);
              })
  }
}
