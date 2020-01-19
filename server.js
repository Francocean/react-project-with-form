var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/comments.db');
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/build')); //rememeber you have to use npm run build before
//you write this line.

app.use(bodyParser.urlencoded({extended: false}));

// routes
app.get('/', function(request, response){
    response.send('Hello world, this is mine');
});
app.get('/comments', function(request, response){
    console.log('GET request received at /comments');
    db.all('SELECT * FROM comments', function(err, rows){
        if(err){
            console.log('Error: ' + err);
        }else{
            response.send(rows);
        }
    })
});

// a post request is when the client is sending data to the server, usually from a form.
app.post('/comments', function(request, response){
    console.log('POST request received at /comments');
    // the following line is written after body-parser is installed and required() above.
    db.run('INSERT INTO comments VALUES (?, ?)', [request.body.name, request.body.comment], function(err){
        if(err){
            console.log('Error: ' + err);
        }else{
            response.status(200).redirect('/');
        }
    });
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});