import express, { NextFunction, Request, Response } from 'express';
import http from 'http';

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ foo: 'bar' });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
