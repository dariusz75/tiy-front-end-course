function sendMessage(message, callMeWhenDone) {
	setTimeout(function sendingMessage() {
		 console.log(message);
		 callMeWhenDone();
	}, 1000);
}


/* callback hell

sendMessage('Everything works', function callback1() {
	 sendMessage('Not everything is done', function callback1() {
	 	sendMessage('works', function callback1() {
	 		sendMessage('for you', function callback1() {});
	 	});
	});
});

*/
function finish() {}

function sendMessage4() {
	 sendMessage('for you', finish);
}

function sendMessage3() {
	 sendMessage('works', sendMessage4);
}

function sendMessage2() {
	 sendMessage('Not everything', sendMessage3);
}

sendMessage('Everything works', sendMessage2); 