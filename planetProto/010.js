// -> Create an object called 'robot' using an object literal
// -> robot should have a property 'smart' with value true
if (!claim){
  var claim = function(a,b){
    if (a === b){
      console.log("matched", a, "===",b);
    }
  };
}
var robot = {
    smart: true
};
// -> Claim the result robot.smart
claim(robot.smart, true);

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	robot: robot
};


