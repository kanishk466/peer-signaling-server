// index.js
const express = require('express');
const { ExpressPeerServer } = require('peer');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());

const server = app.listen(PORT, () => {
  console.log(`🔌 Peer server running at http://localhost:${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/',
});

app.use('/peerjs', peerServer);
