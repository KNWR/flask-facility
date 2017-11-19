const leapjsplugins = require('leapjs-plugins');

const Leap = require ('leapjs');

const controller = new Leap.Controller();

controller
.use("riggedHands")
.connect();

controller.loop(function(frame){
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
