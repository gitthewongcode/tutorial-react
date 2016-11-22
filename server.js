var express = require('express');

var app = express();

    // tell it what folder you want it to serve
    app.use(express.static('public'));

    // #listen( port_number, callback )
    //    tells the node server to listen onto port 3000 and when
    //    the server starts up, to execute the callback
    app.listen(3000, function() {
      console.log('Express server is up on port 3000');
    });
