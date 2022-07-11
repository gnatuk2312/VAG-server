const express = require('express');
const config = require('config');

const app = express();
const PORT = config.get('serverPort') || 4000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is working on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
