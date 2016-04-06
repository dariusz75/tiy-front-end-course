

	

	
var Thumbnail = React.createClass({
	getInitialState: function () {
		return {
			isSelected: false
		};
	}, 
	handleClick: function () {
		this.props.handleClick(this.props.counter);
		this.setState({
			isSelected: !this.state.isSelected
		});
	},
	render: function () {
		
		return <div className={'thumbnail' + (this.state.isSelected ? ' selected' : '')} onClick={this.handleClick}>{'Picture ' + this.props.counter}</div>;				
	} 
});



	var Boxes = React.createClass({
  getInitialState: function () {
  	return {
  		pictureCount: 1
  	};
  },
  changePicture: function (pictureCount){
  	this.setState({
  		pictureCount: pictureCount
  	});
  },
  render: function () {
    return 	<section className="container">
		    			<div className="main-picture">{this.state.pictureCount}</div>
		      		<Thumbnail counter="1" handleClick={this.changePicture} />
		      		<Thumbnail counter="2" handleClick={this.changePicture} />
		      		<Thumbnail counter="3" handleClick={this.changePicture} />
      			</section>;  
  }
});


var parentElement = document.querySelector('[data-react-app]');
var reactComponent = ReactDOM.render(<Boxes />, parentElement);
