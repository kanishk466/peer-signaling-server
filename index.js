// index.js
const express = require('express');
const { ExpressPeerServer } = require('peer');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

const server = app.listen(port, () => {
  console.log(`🔌 Peer server running at http://localhost:${port}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
});

app.use('/peerjs', peerServer);
