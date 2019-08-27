let express = require('express');
let mongoose = require('mongoose');
let router = require('./routes/router');
const port = process.env.PORT || 3000;

app = express();
app.set('view engine', 'ejs');
// mongoose.connect('mongodb+srv://michaelo:michaelayo@cluster0-u8mop.mongodb.net/test?retryWrites=true&w=majority', 
// {useNewUrlParser: true});
mongoose.connect('mongodb://localhost/todo', { useNewUrlParser: true });
app.use(express.static('public'));
router(app);
app.listen(port, () => {
    console.log('Todo listening on port'+ port);
});