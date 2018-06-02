var events = require('events')
var eventEmitter = new events.EventEmitter();

var listner1 = function listner1(){
    console.log('Listner1 executed!')
}

var listner2 = function listner2(){
    console.log('Listner2 executed!')
}

var listner3 = function listner3(){
    console.log('Listner3 executed!')
}
var listner4 = function listner4(){
    console.log('Listner4 executed Only one!')
}
eventEmitter.addListener('listner', listner1);
eventEmitter.addListener('listner', listner2);
eventEmitter.addListener('listner', listner3);
eventEmitter.addListener('listner', listner1);
eventEmitter.once('listner', listner4);

var eventListenerCount = require('events').EventEmitter.listenerCount(eventEmitter, 'listner')
console.log(eventListenerCount)

eventEmitter.emit('listner');
var eventListenerCount = require('events').EventEmitter.listenerCount(eventEmitter, 'listner')
console.log(eventListenerCount)
eventEmitter.removeListener('listner', listner1)
eventEmitter.emit('listner');



