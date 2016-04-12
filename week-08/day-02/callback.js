function showInfo (callback) {
	 console.log('This message is logged by showInfo function.');
	 callback();
}

showInfo(function () {
	 console.log('This text is logged by callback');
})