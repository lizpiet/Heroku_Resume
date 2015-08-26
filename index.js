var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200);
    res.write("Hello!");
    res.end();
}).listen(process.env.PORT || 3000);


console.log("Hello!");







//curl 127.0.0.1:3000