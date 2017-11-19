var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();

// numRatings is the number of votes registered
var numRatings = 0;
// voteTotal = the sum of the votes
var voteTotal = 0;


Leap.loop(function(frame) {


  // start loop
  function toLoop (frame) {

  const hands = frame.hands;

  hands.map(function(hand){
  const fingers = hand.fingers;
  const extendedFingers = fingers.filter (function(finger){
    return finger.extended;
  });
  
  console.log(extendedFingers.length); });
  numRatings++;
  voteTotal += extendedFingers.length;;

  var ratingAvg = voteTotal/numRatings;
  ratingAvg = Math.round(ratingAvg*100)/100;

// typically, we wouldn't have the key exposed like this ... 
  dweetio.dweet_for("fingerRatingAverage211", {some:ratingAvg}, function(err, dweet){
 
      console.log(dweet.thing); // "my-thing" 
      console.log(dweet.content); // The content of the dweet 
      console.log(dweet.created); // The create date of the dweet 
 
    });
} // toLoop

setInterval(toLoop, 5000);

// end loop

})

// dweetio is the client used for sending data to David's dashboard 



  

// window.onload=function(){
//       var scene = new THREE.Scene();
// 			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// 			var renderer = new THREE.WebGLRenderer();
// 			renderer.setSize( window.innerWidth, window.innerHeight );
// 			document.body.appendChild( renderer.domElement );

// 			//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 			//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 			//var cube = new THREE.Mesh( geometry, material );


//       const handGeometry = new THREE.BoxGeometry(1,1,6);
//       const handMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
//       const hands = [
//         new THREE.Mesh(handGeometry,handMaterial)
//       ];
//       scene.add( hands[0])


//       for (i=0; i<4; i++) {
//       //instance of finger 1
//       const fingerGeometry = new THREE.BoxGeometry(.15,1,6);
//       const fingerMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
//       const finger = new THREE.Mesh(fingerGeometry,fingerMaterial);
//       scene.add( finger );
//       }



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

// 			camera.position.z = 5;


// 				renderer.render(scene, camera);

// }

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

/*
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

*/
