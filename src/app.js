const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const consolidate = require('consolidate')


const PORT = 8000;


// Initiliazations
const app = express();

// Setting
app.use(bodyParser.urlencoded({ extended: false }))
app.set('port',  PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', consolidate.nunjucks); //Investigar que hace nunjucks & consolidate
app.set('view engine', 'html');




// Routes
app.use(require('./routes/index'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));



// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});