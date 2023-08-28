const fs = require('fs');

// Create a writable stream to the file
const writeStream = fs.createWriteStream('output.txt', { encoding: 'utf-8' });

// Write data to the stream
writeStream.write('Hello, ');
writeStream.write('this is an example of ');
writeStream.write('using createWriteStream in Node.js!');
writeStream.end(); // Close the stream after writing

// Event: finish - This event is triggered when all data has been written
writeStream.on('finish', () => {
    console.log('Data has been written to the file.');
});

// Event: error - This event is triggered if there's an error during writing
writeStream.on('error', (error) => {
    console.error('An error occurred:', error.message);
});
