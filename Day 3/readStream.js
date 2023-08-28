const fs = require('fs');

// Create a readable stream from the file
const readStream = fs.createReadStream('example.txt', 'utf-8');

// Event: data - This event is triggered when new data is available to be read
readStream.on('data', (chunk) => {
    console.log('Received chunk of data:');
    console.log(chunk);
});

// Event: end - This event is triggered when all data has been read
readStream.on('end', () => {
    console.log('Finished reading data.');
});

// Event: error - This event is triggered if there's an error during reading
readStream.on('error', (error) => {
    console.error('An error occurred:', error.message);
});
