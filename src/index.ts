import express from 'express';
import http from 'http';
import { App } from './app';

const PORT = process.env.PORT || 3000;

const appInitialize = new App(express);

appInitialize.init();

const server = http.createServer(appInitialize.getApp);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
