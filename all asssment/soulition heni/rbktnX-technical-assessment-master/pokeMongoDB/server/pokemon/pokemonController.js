var Pokemon = require('./Pokemon');
// var {Pokemon} = require("./Pokemon");

// TODO: Complete each of the following controller methods
// exports.createOne = function (req, res) {
// };

// exports.retrieve = function (req, res) {
// };

// exports.retrieveOne = function (req, res) {
// };

// exports.updateOne = function (req, res) {
// };

// exports.deleteOne = function (req, res) {
// };



// exports.createOne = function (data, callback) {
//   Pokemon.create(data, callback);
// };

// exports.retrieve = function (callback) {
//   Pokemon.find({}, callback);
// };

// exports.retrieveOne = function (data, callback) {
//   Pokemon.findOne(data, callback);
// };

// exports.updateOne = function (id, data, callback) {
//   Pokemon.findByIdAndUpdate(id, data, callback);
// };

// exports.deleteOne = function (id, callback) {
//   Pokemon.findByIdAndRemove(id, callback);
// };
exports.createOne = async function (req, res) {
  try{
   let data =await Pokemon.create(req.body)
   res.send(data)
  }
  catch(error){
  res.send(error)
  };
};

exports.retrieve = async function (req, res) {
 
  try{
   let result = await Pokemon.find({})
   res.send(result)
  }
  catch(error){
   res.send(error)
  }
  
};

exports.retrieveOne = async function (req, res) {
  try{
      let result = await Pokemon.findone({_id: req.params.number})
      res.send(result)
     }
     catch(error){
      res.send(error)
     }
};

exports.updateOne = async function (req, res) {
  try{
      let result = await Pokemon.findOneAndUpdate({_id:req.params.number},req.body)
      res.send(result)
     }
     catch(error){
      res.send(error)
     }
};

exports.deleteOne = async function (req, res) {
  try{
      let result = await Pokemon.deleteOne({_id:req.params.number})
      res.send(result)
     }
     catch(error){
      res.send(error)
     } 
};

exports.deleteAll = async function (req, res) {
try{
  let result = await Pokemon.deleteMany({})
  res.send(result)
}
catch(error){
  res.send(error)
}
}



