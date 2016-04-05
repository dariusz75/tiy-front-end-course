
var mainPicture = React.createElement('div', { className: 'main-picture', key: 'mainPicture' }, 'Main Picture');
var thumbnail1 = React.createElement('div', {className: 'thumbnail-1', key: 'thumbnail1'}, 'Thumbnail 1');
var thumbnail2 = React.createElement('div', {className: 'thumbnail-2', key: 'thumbnail2'}, 'Thumbnail 2');
var thumbnail3 = React.createElement('div', {className: 'thumbnail-3', key: 'thumbnail3'}, 'Thumbnail 3');
var thumbnail4 = React.createElement('div', {className: 'thumbnail-4', key: 'thumbnail4'}, 'Thumbnail 4');
var reactFragment = [ mainPicture, thumbnail1, thumbnail2, thumbnail3, thumbnail4 ];
var section = React.createElement('section', { className: 'container' }, reactFragment);
var parentElement = document.querySelector('[data-react-app]');
ReactDOM.render(section, parentElement);
