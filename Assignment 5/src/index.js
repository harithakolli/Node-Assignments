var http = require("http");
port="8081";
host="localhost";

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    switch (req.url) {
        case "/welcome":
            res.setHeader("Content-Type", "text/plain");
            res.writeHead(200);
            res.end("Welcome to Dominos!");
            break;

        case "/contact":
                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                // res..json({
                //  status :"Success",
                //  message: "Welcome to Dominos!"
                // }}
                res.end('{"phone": "18602100000", "email": "guestcaredominos@jublfood.com"}');
                break; 

        case "/about" :
                res.setHeader("Content-Type", "text/plain");
                res.writeHead(200);
                res.end("Dominos is one of the leading Pizza delivery brand");
        default:
            res.setHeader("Content-Type", "text/plain");
            res.writeHead(404);
            res.end("Page Not Found");
    }
}

httpServer.listen(port,host,() =>{
      console.log(`Server is running on http://${host}:${port}`);
});

module.exports = httpServer;