const player = require('play-sound')();
const MPR121 = require('adafruit-mpr121'),
      mpr121  = new MPR121(0x5A, 1);
const sounds = [
'/home/pi/code/banana-drumset/drumkit-wp/WPDrumkit/WPDrumkitContent/Audio/hihat2.wav',
'/home/pi/code/banana-drumset/drumkit-wp/WPDrumkit/WPDrumkitContent/Audio/snare.wav',
'/home/pi/code/banana-drumset/drumkit-wp/WPDrumkit/WPDrumkitContent/Audio/kick.wav',
'/home/pi/code/banana-drumset/drumkit-wp/WPDrumkit/WPDrumkitContent/Audio/tom1.wav',
'/home/pi/code/banana-drumset/drumkit-wp/WPDrumkit/WPDrumkitContent/Audio/ride2.wav',
'/home/pi/code/banana-drumset/drumkit-wp/WPDrumkit/WPDrumkitContent/Audio/cowbell.wav'
]

// listen for touch events
mpr121.on('touch', (pin) =>{
	if (pin <= sounds.length){
		player.play(sounds[pin]);
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

