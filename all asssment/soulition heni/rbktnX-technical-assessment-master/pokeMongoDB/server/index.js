var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter = require('./pokemon/pokemonRouter');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));



// TODO: Import the pokemonRouter and assign it to the correct route:


app.get('/api/pokemon', function (req, res) {
  res.json({ message: 'Welcome to the Poke-MongoDB RESTful API!' });
  // db.Pokemon.find().then((data)=>{
  //   res.send(data);
  //   console.log(data);

});
// });
// app.get('/api/pokemon', (req, res) =>{
//   db.Pokemon.find()
//   .then((result) =>{
//     res.send(result);
//   })
//   .catch((err)=>{
//     res.send(err);
//   });
// });

app.use('/api/pokemon', pokemonRouter);

var PORT = 3000;
app.listen(PORT, function () {
  console.log('Poke-MongoDB RESTful API listening on http://localhost:' + PORT);
});
