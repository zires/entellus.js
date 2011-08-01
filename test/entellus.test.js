/*!
* entellus.js <chat server based on node.js and socket.io>
* zires <zshuaibin@gmail.com>
* MIT Licensed
*/

/*
 * Preparation dependencies
 */
var entellus = require('entellus'),
	should   = require('should'),
    socket   = require('socket.io'),
    http     = require('http');
	
/**
 * Test
 */	
module.exports = {
  'it should have a property named socket': function(){
    entellus.should.have.property('socket', socket);
  },
  
  'test listen function should return a http server': function(){
    var chat = entellus.listen(3000);
    chat.should.be.an.instanceof(socket.Manager);
    chat.server.should.be.an.instanceof(http.Server);
    chat.server.close();
  }
}
