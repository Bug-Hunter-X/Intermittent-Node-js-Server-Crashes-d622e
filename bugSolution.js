const http = require('http');

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    //Consider sending a 500 error to the client
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Add process event listeners for unhandled exceptions and unhandled rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  //Perform graceful shutdown or other necessary actions here
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  //Perform graceful shutdown or other necessary actions here
  process.exit(1);
});