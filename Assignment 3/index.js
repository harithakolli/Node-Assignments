var http = require('http');
var fs = require('fs');

host='localhost';
port='5000';

let fileContent = "<h1> Hello World </h1><p> This is Kolli Haritha... </p>";
  
fs.writeFile("index.html", fileContent, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully");
  }
});

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port,host,() =>{
    console.log("server started");
      console.log(`Server is running on http://${host}:${port}`);
});