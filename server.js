let express = require('express')
//const { route } = require('./routes/routes')
let routes = require('./routes/routes')
let path = require('path')

let app = express() // creates web app

app.use(express.static(path.join(__dirname,'hello-vue', 'dist'))) //dist contains static codes, all users will have the same html css vue app data 

app.use('/api',routes) // tells the app to use the route that we just created, all API routes will be relative to /api

// we will have the server running and will have our app listen to a particular port
let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express sever running on port', server.address().port)
}) //use the user computer specified port or if non exist, use port 3000


