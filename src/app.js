const express = require ('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

//settings
app.set('port', process.env.PORT || 3000);

//meddlewars
app.use(morgan('dev'));
app.use(bodyParser.json());


//routes
const clienteRoute = require('./routes/clienteRoute');
app.use(clienteRoute);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

