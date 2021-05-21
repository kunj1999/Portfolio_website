
const express = require('express')
const app = express()

let options = {
    dotfiles: "ignore",
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

app.use(express.static(__dirname+"/public/", options));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
    res.end();
});

app.listen(3000);

console.log("Server listening on port 3000");