let express = require('express') // similar to python import, bringing the express library into this file
let router = express.Router() // creates a router object  which understands how to match different requests to 
// different paths, with functions that can respond to each individual requests

// configure a route that is a get request, a request that fetches data and path is /, the base request path
router.get('/', function(req, res, next){  // function will run to provide a response. arguments req-request which is the request that the client has made on the browser , res-response is the reponse that server is gonna send back for that request and next
    res.json( {  'message': 'Hello ITEC 2560 Web Programmers' }) // sends a json response back.  we can response html web pages, binary files or images etc
})

module.exports = router // another file will be able to include or require this file and it will be able to access this router
//object that has been configured with this mapping of path / to function