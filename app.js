let express = require('express');
let todo = require('./todo');
const port = process.env.PORT || 3000;

app = express();
app.set('view engine', 'ejs');
todo(app);
app.listen(port, () => {
    console.log('Todo listening on port'+ port);
});