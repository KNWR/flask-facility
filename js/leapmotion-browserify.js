(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload=function(){
      var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			//var cube = new THREE.Mesh( geometry, material );


      const handGeometry = new THREE.BoxGeometry(1,1,6);
      const handMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
      const hands = [
        new THREE.Mesh(handGeometry,handMaterial)
      ];
      scene.add( hands[0])


      for (i=0; i<4; i++) {
      //instance of finger 1
      const fingerGeometry = new THREE.BoxGeometry(.15,1,6);
      const fingerMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
      const finger = new THREE.Mesh(fingerGeometry,fingerMaterial);
      scene.add( finger);
      }



      // const fingerGeometry = new THREE.BoxGeometry(.15,1,6);
      // const fingerMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
      // const fingers = [
      //   new THREE.Mesh(fingerGeometry,fingerMaterial)
      // ];

      // // issue here
      // for(i=0;i<=fingers.length; i++) {
      //   if (fingers[i]!=null) {
      //     scene.add( fingers[i] );
      //    }
      // }

			camera.position.z = 5;


				renderer.render(scene, camera);

}

/*
const leapjsplugins = require('leapjs-plugins');

const Leap = require ('leapjs');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/ window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

window.onload=function(){
document.body.appendChild(renderer.domElement);
}

const controller = new Leap.Controller();
const handGeometry = new THREE.BoxGeometry(60,10,60);
const handMaterial = new THREE.MeshBasicMaterial({color:0x00ff00})
const hands = [
  new THREE.Mesh(handGeometry,handMaterial),new THREE.Mesh(handGeometry,handMaterial)
];


scene.add(hands[0],hands[1])


camera.position.z = 5;

//controller
  //.use("riggedHand")
  //.connect();

Leap.loop(function(frame){
  const hands = frame.hands;
  //console.log(hands.length);

  hands.map(function(hand){
  const fingers = hand.fingers;
  const extendedFingers = fingers.filter (function(finger){
    return finger.extended;
  });
  //const amountOfFingers = fingers.length;
  console.log(extendedFingers.length);
});
})


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

*/

},{}]},{},[1]);
