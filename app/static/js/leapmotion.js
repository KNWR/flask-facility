window.onload=function(){
      var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			//var cube = new THREE.Mesh( geometry, material );


/*
      const handGeometry = new THREE.BoxGeometry(1,1,6);
      const handMaterial = new THREE.MeshBasicMaterial({color:0x00ff00})
      const hands = [
        new THREE.Mesh(handGeometry,handMaterial)
      ];
      scene.add( hands[0])
*/
      const fingerGeometry = new THREE.BoxGeometry(.15,1,6);
      const fingerMaterial = new THREE.MeshBasicMaterial({color:0x00ff00})
      const fingers = [
        new THREE.Mesh(fingerGeometry,fingerMaterial)
      ];
      scene.add( fingers[0],fingers[1],fingers[2],fingers[3],fingers[4])

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
