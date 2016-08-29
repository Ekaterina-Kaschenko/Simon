import $ from '../vendor/jquery-3.1.0.min.js';
import '../styles/main.scss';
import '../styles/reset.scss';

const _elements = {
	blocks: {
		blue:  document.getElementsByClassName('blue-part')[0],
		blueActive:  document.getElementsByClassName('blue-active')[0],
		red:  document.getElementsByClassName('red-part')[0],
		redActive:  document.getElementsByClassName('red-active')[0],
		yellow:  document.getElementsByClassName('yellow-part')[0],
		yellowActive:  document.getElementsByClassName('yellow-active')[0],
		green:  document.getElementsByClassName('green-part')[0],
		greenActive:  document.getElementsByClassName('green-active')[0],
	}

}

class Simon {
	constructor() {
    this.init();
  }

	init() {
		this.events();
	}

	events () {
		_elements.blocks.blue.addEventListener('mousedown', (event) => {
		  event.target.classList.add('blue-active');
		  
		  var audio = new Audio('/simonSound1.mp3') ;

		  audio.oncanplaythrough = function() {
		  	audio.play();
		  }
		  audio.loop = true;
		  audio.onended = function() {
		  	audio.play();
		  }
		});

		_elements.blocks.blue.addEventListener('mouseup', (event) => {
		  event.target.classList.remove('blue-active');
		  var audio = new Audio('/simonSound1.mp3') ;
 			audio.onended = function() {
	    audio.remove() //Remove when played.
	  };
		});

		_elements.blocks.red.addEventListener('mousedown', (event) => {
		  event.target.classList.add('red-active');
		});

		_elements.blocks.red.addEventListener('mouseup', (event) => {
		  event.target.classList.remove('red-active');
		});

		_elements.blocks.yellow.addEventListener('mousedown', (event) => {
		  event.target.classList.add('yellow-active');
		});

		_elements.blocks.yellow.addEventListener('mouseup', (event) => {
		  event.target.classList.remove('yellow-active');
		});

		_elements.blocks.green.addEventListener('mousedown', (event) => {
		  event.target.classList.add('green-active');
		});

		_elements.blocks.green.addEventListener('mouseup', (event) => {
		  event.target.classList.remove('green-active');
		});
	}
}

new Simon();
