let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
    item: String
});
let Todo = mongoose.model('Todo', todoSchema);

let urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
    app.get('/', (req, res) => { 
        res.render('home');
    });
    app.get('/home', (req, res) => {
        res.render('home');
    });
    app.get('/signup', (req, res) => {
        res.render('signup');
    })
    app.get('/todo', (req, res) =>{
        Todo.find({}, (err, data) =>{ 
            if(err) throw err;
        res.render('todo', {todos: data});
        });
    });
    app.post('/todo',urlEncodedParser, (req, res) =>{
        let newTodo = Todo(req.body).save((err, data) =>{
            if (err) throw err;
            res.json(data);
        })
    });
    app.delete('/todo/:item', (req, res) =>{
        Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove((err, data) => {
            if(err) throw err;
            res.json(data);
        })
        
    })
}