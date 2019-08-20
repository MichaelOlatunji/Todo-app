let express = require('express');
let todo = require('./todo');

app = express();
app.set('view engine', 'ejs');
todo(app);
app.listen(8080, () => {
    console.log('Todo listening on port 8080');
});