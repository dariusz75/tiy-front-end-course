/*
var parentElement = document.querySelector('[data-react-app]');

var HalloWorldElement = React.createClass({
	
	edit: function() {
		alert ('Editing note...');
	},

	remove: function() {
	alert ('Removing note...');
	},

	render: function() {
		return 	<div className="note">
							<span>
							<p>Hello World!</p>
								<button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"></button>
								<button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"></button>
							</span>
						</div>;
	}
});

var reactComponent1 = ReactDOM.render(<HalloWorldElement />, parentElement);
*/


var parentElement = document.querySelector('[data-react-app]');

var Thumbnail = React.createClass({

	render: function() {
		return 	<div className="thumbnail">{this.props.text}</div>
							
	}
});

var PicturesComponent = React.createClass({

	render: function() {
		return 	<div>
							<div className="container">
								<div className="main-picture img">Main Picture</div>
								<Thumbnail text="Thumbnail" />
								<Thumbnail text="Thumbnail" />
								<Thumbnail text="Thumbnail" />
								<Thumbnail text="Thumbnail" />
							</div>
						</div>;
	}
});


var ArrowLeft = React.createClass({

	render: function() {
		return 	<div className="glyphicon glyphicon-arrow-left"></div>							
	}
});

var ArrowRight = React.createClass({

	render: function() {
		return 	<div className="glyphicon glyphicon-arrow-right"></div>							
	}
});

var FinalComponent = React.createClass({

	render: function() {
		return	<div> 	
						<PicturesComponent />	
						<ArrowLeft />
						<ArrowRight />
						</div>						
	}
});

ReactDOM.render(<FinalComponent />, parentElement);


