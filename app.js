var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    task = require('./restApi/models/todoModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoData');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



var routes = require('./restApi/routes/todoRoutes');
routes(app);

app.listen(port);

/*app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + ' not found'})
});*/

console.log("ToDo App Serer Started on port " + port);