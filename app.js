const express = require('express');

const fs = require('fs');
const http = require('http');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});

  fs.createReadStream(path.resolve(__dirname, 'src/index.html'))
    .pipe(res);

});

app.use('/', express.static(path.join(__dirname, 'dist')));

http.createServer(app).listen(3333, function(){
 console.log("Server started at port 3333");
});
