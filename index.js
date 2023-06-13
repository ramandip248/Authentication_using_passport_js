const express = require('express');
const path = require('path');
const port = 8000;

// express server set up
const app = express();

// static file set up
app.use(express.static('./assests'));

// set up of views
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// router set up
app.use('/',require('./routes'));









app.listen(port,function(err){
    if(err){
        console.log(`err in connection, ${err}`)
    }
    console.log(`server is running on port ${port}`)
})