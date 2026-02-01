// Real code for CodeQL to analyze
const fs = require('fs');

function processData(userInput) {
    // Potentially unsafe code for the scanner to find
    console.log("Processinggg: " + userInput);
    
    const data = {
        admin: false,
        key: "SECRET_TOKEN_123456"
        
    };

    return data;
}

processData("test-run");
