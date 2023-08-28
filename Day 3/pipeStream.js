const fs = require('fs');
const { Transform } = require('stream');

// Create a custom Transform stream to transform the data
class UppercaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        // Transform the incoming data by converting it to uppercase
        const transformedChunk = chunk.toString().toUpperCase();
        this.push(transformedChunk);
        callback();
    }
}

// Create a readable stream from the input file
const readStream = fs.createReadStream('example.txt', 'utf-8');

// Create a writable stream to the output file
const writeStream = fs.createWriteStream('outputPipe.txt', { encoding: 'utf-8' });

// Create an instance of the custom Transform stream
const uppercaseTransform = new UppercaseTransform();

// Pipe the data through the transform stream and then to the write stream
readStream.pipe(uppercaseTransform).pipe(writeStream);

// Event: finish - This event is triggered when all data has been written
writeStream.on('finish', () => {
    console.log('Data has been transformed and written to the output file.');
});

// Event: error (writeStream) - This event is triggered if there's an error during writing
writeStream.on('error', (error) => {
    console.error('An error occurred during writing:', error.message);
});

// Event: error (readStream) - This event is triggered if there's an error during reading
readStream.on('error', (error) => {
    console.error('An error occurred during reading:', error.message);
});
