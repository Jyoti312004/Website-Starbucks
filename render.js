const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Request received for: " + req.url);

  
  if (req.url === "/" || req.url === "/index.html") {
    const indexPath = path.join(__dirname, "index.html");
    fs.readFile(indexPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }

  
  else if (req.url === "/pages/order.html") {
    const orderPath = path.join(__dirname, "/pages/order.html");
    fs.readFile(orderPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }

  
  else if (req.url === "/pages/checkout.html") {
    const orderPath = path.join(__dirname, "/pages/checkout.html");
    fs.readFile(orderPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }

  else if (req.url === "/pages/about.html") {
    const orderPath = path.join(__dirname, "/pages/about.html");
    fs.readFile(orderPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }

  else if (req.url === "/pages/history.html") {
    const orderPath = path.join(__dirname, "/pages/history.html");
    fs.readFile(orderPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }
  else if (req.url === "/pages/sign.html") {
    const orderPath = path.join(__dirname, "/pages/sign.html");
    fs.readFile(orderPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }
  

  else if (req.url === "/js/index.js") {
    const jsPath = path.join(__dirname, "/js/index.js");
    fs.readFile(jsPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }


  else if (req.url === "/styles/style.css") {

    const cssPath = path.join(__dirname, "styles", "style.css");
    fs.readFile(cssPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }

 
  else if (req.url === "/styles/order.css") {
    const orderCssPath = path.join(__dirname, "styles", "order.css");
    fs.readFile(orderCssPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  }

  else if (req.url === "/styles/checkout.css") {
    const orderCssPath = path.join(__dirname, "styles", "checkout.css");
    fs.readFile(orderCssPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  } 
  
  else if (req.url === "/styles/about.css") {
    const orderCssPath = path.join(__dirname, "styles", "about.css");
    fs.readFile(orderCssPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  } 

  else if (req.url === "/styles/history.css") {
    const orderCssPath = path.join(__dirname, "styles", "history.css");
    fs.readFile(orderCssPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  } 

  else if (req.url === "/styles/navbar.css") {
    const orderCssPath = path.join(__dirname, "styles", "navbar.css");
    fs.readFile(orderCssPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: File not found");
      }
    });
  } 


  else if (req.url.startsWith("/main_page_image/")) {
    const imgPath = path.join(__dirname, req.url);
    fs.readFile(imgPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: Image not found");
      }
    });
  }

  else if (req.url.startsWith("/icons/")) {
    const imgPath = path.join(__dirname, req.url);
    fs.readFile(imgPath, (error, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: Image not found");
      }
    });
  }

  else if (req.url.startsWith("/newimage/")) {
    const imgPath = path.join(__dirname, req.url);
    fs.readFile(imgPath, (error, data) => {
      if(data) {
        res.writeHead(200, { "Content-Type": "image/png" });
        res.end(data);
      } else {
        res.writeHead(404);
        res.end("Error: Image not found");
      }
    });
  } else {
  
    res.writeHead(404);
    res.end("Error: Page not found");
  }

  
});



server.listen(3000, "localhost", () => {
  console.log("Server is running on port 3000");
});
