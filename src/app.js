const express = require("express");
const app = express();

const morgan = require ('morgan'); 
const bodyParser = require('body-parser')

//setting 
app.set('port', process.env.PORT || 3000);

//middelware
app.use(morgan('dev')); 
app.use(bodyParser.json()); 

//routes
require('./routes/userRoutes')(app)


app.listen(app.get('port'),  () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });
