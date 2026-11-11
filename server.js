const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
  console.log("visit", req.url);
  res.end("Hello from " + fs.readFileSync("version.txt", "utf8"));
}).listen(process.env.PORT, "0.0.0.0");
