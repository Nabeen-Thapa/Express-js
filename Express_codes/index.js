var express = require('express');
var app = express();

var things = require('./things.js');
//accessing thing.js and it is accessing due to module.exports = router; of things.js 
app.use('/things', things);
app.listen(3000);

//The app.use function call on route '/things' attaches the things router with this route. Now whatever requests our app gets at the '/things', will be handled by our things.js router. The '/' route in things.js is actually a subroute of '/things'. Visit localhost:3000/things/ and you will see the following output.