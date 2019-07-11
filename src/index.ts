import express from 'express';

const server = express();

let requestCount = 1;

server.use('/', (req: express.Request, res: express.Response): void => {
  const message = `Request Count: ${requestCount}`;

  res
    .set('Content-Type', 'text/html')
    .status(200)
    .send(
      `<html><head><meta http-equiv="refresh" content="2"></head><body>${message}</body></html>`,
    );

  console.log(`Handled request ${requestCount++}`);
});

server.listen(8080, (): void => {
  console.log('Running at http://localhost:8080');
});
