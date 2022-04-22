var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// TODO: Create route handlers for each of the six methods in pokemonController
// pokemonRouter.route('/')

// .get(function(req, res) {
//   pokemonController.retrieve((err, result)=>{
//     if (err) { console.log(err); } else if (result) {
//       console.log(result);
//       res.send(result);
//     }
//   });
// })
// .post(function(req, res) {
//   console.log(req.body);
//   pokemonController.createOne(req.body, (err, result)=>{
//     if (err) { console.log(err); } else if (result) {
//       res.send(result);
//     }
//   });
// })
  
// .post(function(req, res) {
//   console.log(req.body);
//   pokemonController.retrieveOne(req.body.number, (err, result)=>{
//     if (err) { console.log(err); } else if (result) {
//       console.log(result);

//       res.send(result);
//     }
//   });
// })


// .delete(function(req, res) {
//   console.log(req.body._id);
//   var x = req.body._id;
//   console.log(x);

//   pokemonController.deleteOne(x, (err, result)=>{
//     if (err) { console.log(err); } else if (result) {
//       res.send(result);
//     }
//   });
// })


// .put(function(req, res) {
//   console.log(req.body);
//   pokemonController.deleteOne(req.body._id, req.body, (err, result)=>{
//     if (err) { console.log(err); } else if (result) {
//       res.send(result);
//     }
//   });
// });

pokemonRouter.get('/', pokemonController.retrieve);
pokemonRouter.get('/:number', pokemonController.retrieveOne);
pokemonRouter.post('/', pokemonController.createOne);
pokemonRouter.delete('/', pokemonController.deleteAll);
pokemonRouter.put('/:number', pokemonController.updateOne);
pokemonRouter.delete('/:number', pokemonController.deleteOne);




// pokemonRouter.route(':id')
// .get(function(req, res) {});
module.exports = pokemonRouter;
