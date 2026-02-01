// Real code for CodeQL to analyze
const fs = require('fs');

function processData(userInput) {

    const content = fs.readFileSync(userInput); 

    console.log("Processingggg: " + userInput);

    const data = {
        admin: false,
        fileContent: content.toString(),
        AWS_ID: "AKIA45J78K92L0EXAMPLE",
        AWS_SECRET: "zX9+bY7vR2qP4kL9mJ1nN6pT4vR8sK3lM5nB7vQ9aaabbbdddeeeffffgghh",
        token: "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"
    };

    return data;
}

const externalInput = process.argv[2]; 
processData(externalInput);
