var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    fs.readFile('checkList.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
}).listen(3000);

console.log("Listeing on Port 3000")
