let bodyParser = require('body-parser');
let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://michaelo:michaelayo@cluster0-u8mop.mongodb.net/test?retryWrites=true&w=majority');
let todoSchema = new mongoose.Schema({
    item: String
});
let Todo = mongoose.model('Todo', todoSchema);
// let itemOne = Todo({item: 'I love Coding'}).save(function(err){
//     if(err) throw err;
//     console.log('Item Saved');
// })

// let data = [{item: 'Coding'},{item: 'Reading'}, {item: 'Get Some Exercise'}]
let urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = (app) => {
    app.get('/', (req, res) => {
        Todo.find({}, (err, data) =>{ 
            if(err) throw err;
        res.render('todo', {todos: data});
        });
    });
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
        // data.push(req.body);
        // res.json(data);
    });
    app.delete('/todo/:item', (req, res) =>{
        Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove((err, data) => {
            if(err) throw err;
            res.json(data);
        })
        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g,'-') !== req.params.item;
        // })
        // res.json(data);
    })
}