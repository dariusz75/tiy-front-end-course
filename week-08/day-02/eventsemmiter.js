var events = require('events');

var emiter = new events.EventEmitter();

emiter.on('userRegister', showGreetings);

function showGreetings () {
	 console.log('Welcome on the board!');
}

emiter.emit('userRegister');