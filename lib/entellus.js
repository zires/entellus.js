/*!
* entellus.js <chat server based on node.js and socket.io>
* zires <zshuaibin@gmail.com>
* MIT Licensed
*/


/*
 * Dependencies
 */
var socket = require('socket.io');

/*
 * Socket.io
 * */	
exports.socket = socket;

/*
 * Server
 */
exports.server;

/*
 * log
 */
exports.logger;

/*
 * Listen method calls the socket.io#listen
 * Check socket.io api for more details 
 * */
exports.listen = function(server, options, fn){
  var manager = socket.listen(server, options, fn);
  exports.logger = manager.log;
  exports.logger.info('entellus started');
  return manager;
}

