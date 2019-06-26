const express = require ('express');
const app = express();
const cors = require('cors')

const morgan = require('morgan');
const bodyParser = require('body-parser');

//settings
app.set('port', process.env.PORT || 3000);

//meddlewars
app.use(morgan('dev'));
app.use(bodyParser.json());

//cors
app.use(cors())

//routes
const clienteRoute = require('./routes/clienteRoute');
app.use(clienteRoute);
const consultaRoute = require('./routes/consultaRoute');
app.use(consultaRoute);



app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

