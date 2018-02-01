const player = require('play-sound')();
const MPR121 = require('adafruit-mpr121'),
      mpr121  = new MPR121(0x5A, 1);

// listen for touch events
mpr121.on('touch', (pin) =>{
	if (pin === 0){
		player.play('./c1.wav')
		console.log(`pin ${pin} touched`);
	}else if ( pin === 1){
		player.play('./c1s.wav')
		console.log(`pin ${pin} touched`);
	}else if ( pin === 2){
		player.play('./d1.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 3){
		player.play('./d1s.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 4){
		player.play('./e1.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 5){
		player.play('./f1.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 6){
		player.play('./f1s.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 7){
		player.play('./g1.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 8){
		player.play('./g1s.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 9){
		player.play('./a1.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 10){
		player.play('./a1s.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 11){
		player.play('./b1.wav');
		console.log(`pin ${pin} touched`);
	}else if ( pin === 12){
		player.play('./c2.wav');
		console.log(`pin ${pin} touched`);
	}
});
// listen for release events
mpr121.on('release', (pin) => console.log(`pin ${pin} released`));

// listen for changes to the state of a specific pin
mpr121.on(3, (state) => console.log(`pin 3 is ${state ? 'touched' : 'released'}`));

// check the current state of a specific pin synchronously
const state = mpr121.isTouched(2);
console.log(`pin 2 is ${state ? 'touched' : 'released'}`);

