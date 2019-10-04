let bodyParser = require('body-parser');
let mongoose = require('mongoose');
// let bcrypt = require('bcrypt');
let User = require('../modules/signup');

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
    app.get('/login', (req, res) => {
        res.render('login');
    })
    app.get('/todo', (req, res) =>{
        Todo.find({}, (err, data) =>{ 
            if(err) throw err;
        res.render('todo', {todos: data});
        });
    });

    app.get('/conference', (req, res) => {
        res.render('index')
    })
    app.post('/todo',urlEncodedParser, (req, res) =>{
        let newTodo = Todo(req.body).save((err, data) =>{
            if (err) throw err;
            res.json(data);
        })
    });
    app.post('/register', urlEncodedParser, async (req, res) => {
        
        // const genSalt = await bcrypt.genSalt(10);
        // bcrypt.hash(req.body.pwd, genSalt, (err, hash) => {
            User.create({
                first_name: req.body.fname,
                last_name: req.body.lname,
                email: req.body.mail,
                username: req.body.uname,
                password: hash,
                gender: req.body.gender
            }).then((user) => {
                console.log(user);
                if(user){
                    console.log(user);
                    // req.method = 'get';                    
                    res.send(user);
                }
            }).catch((err) => {
                console.log(err);
            })
        // })
        // .then((hash) => {
            
        // }).catch((err) => {console.log(err)}) 
    });

    app.delete('/todo/:item', (req, res) =>{
        Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove((err, data) => {
            if(err) throw err;
            res.json(data);
        })
        
    })
}