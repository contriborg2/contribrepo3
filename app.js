const http = require('http');
const url = require('url');

function processData(userInput) {
    // Ez a sor egy "Log Injection" sebezhetőség is lehetne
    console.log("Processing: " + userInput);
    
    // EGYÉB BIZTONSÁGI ADATOK (Teszt jelleggel benne maradtak)
    const data = {
        admin: false,
        AWS_ID: "AKIA45J78K92L0EXAMPLE"
    };

    return `<html><body><h1>Hello, ${userInput}</h1></body></html>`;
}

// Létrehozunk egy szervert, ami XSS sebezhető
http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const name = queryObject.name || "Guest";

    // KRITIKUS HIBA: A processData-ból jövő, tisztítatlan inputot 
    // közvetlenül kiküldjük HTML-ként (Reflected XSS)
    const htmlResponse = processData(name);
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(htmlResponse);
}).listen(8080);

console.log("Server running on port 8080");
