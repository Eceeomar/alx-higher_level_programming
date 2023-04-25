#!/usr/bin/node

const request = require('request');

reqiuest(process.argv[2], function (_err, res) {
  console.log('code:', res.statusCode); // Print status code if recieved
});
