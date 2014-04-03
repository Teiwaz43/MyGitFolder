/**
 * Created by Teiwaz on 08-01-2014.
 */
(function() {
    //requires
    var express = require('express');
    var Requests = require('./request');
    //app
    var app = express();
    var port=8080;
    //Middlewarez
    app.use(express.bodyParser());
    /*app.use(function(err, req, res, next){
     if (req.xhr) {
     res.send(500, { error: 'Something blew up 500!' });
     } else {
     res.send(404, { error: 'Something blew up 404!' });
     }
     });*/
    //Requests middlewarez
    Requests.requestSetup(app);
    //var server
    var server =app.listen(port);


    console.log(">serverUP")
})();