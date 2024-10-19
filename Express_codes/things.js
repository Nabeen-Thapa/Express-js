// To separate the routes from our main index.js file, we will use Express.Router. Create a new file called things.js and type the following in it.

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;
//Now to use this router in our index.js, type in the following before the app.listen function call.