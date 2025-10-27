// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// Function to serve files
function serveFile(res, filePath, contentType, statusCode) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>500 - Internal Server Error</h1>");
    } else {
      res.writeHead(statusCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

function servePage(res, fileName, statusCode) {
    const filePath = path.join(__dirname, 'pages', fileName);
    serveFile(res, filePath, "text/html", statusCode); // <-- Sets content type to "text/html"
}

// Create server
const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "") {
        servePage(res, "index.html", 200);
    }
    else if (req.url === "/about") {
        servePage(res, "about.html", 200);
    }
    else if (req.url === "/home") {
        servePage(res, "home.html", 200);
    }
    else if(req.url ==="/header"){
        servePage(res, "header.html",200)
    }
    else if(req.url ==="/footer"){
        servePage(res, "footer.html",200)
    }
    else if(req.url ==="/menu"){
        servePage(res, "menu.html",200)
    }
    else if (req.url === "/contact") {
    servePage(res, "contact.html", 200);
    } 
    
else if (req.url.endsWith(".css")) {
    const cssPath = path.join(__dirname, "pages", req.url);
    serveFile(res, cssPath, "text/css", 200);
}

    else {
    servePage(res, "404.html", 404);
  }
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

