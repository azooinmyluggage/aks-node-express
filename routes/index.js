'use strict';
var express = require('express');
var router = express.Router();
var redis = require('ioredis');
console.log("trying to create redis client");
// var redisServer = process.env.redis_server || 'redis-cache';
var client = redis.createClient(6379, 'redis-cache');
console.log("redis client created");


// var redis = new Redis(6379, 'redis-cache');

// var redis = new Redis({
//     port: 6379,          // Redis port
//     host: 'atulm-redis.redis.cache.windows.net',   // Redis host
//     family: 4,           // 4 (IPv4) or 6 (IPv6)
//     password: 'Y1cPTLrbcwlSkAT4c56m/0j6dv2CrAMU/LmQ6+zcelE=',
//     db: 0
//   })

console.log('Starting ioredis test');
client.set('foo', 'bar');
console.log('ioredis set completed');
client.get('foo', function (err, result) {
  console.log('ioredis get completed');  
  console.log(result);
});


var fromCache = "Hello world";

/* GET home page. */
router.get('/', function (req, res) {
    console.log("Index route");
    client.get('foo', function (err, result) {
      console.log('ioredis get completed');  
      console.log(result);
    });     
    res.render('index', { title: fromCache[0] });
});

module.exports = router;
