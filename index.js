// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hq = 42;
    let distance = (hq - someValue);
    return Math.abs (distance)
  }
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue) * 264
    return Math.abs (blocks)
  }
  function distanceTravelledInFeet(start, destination) {
    const travelled = (destination- start) * 264
    return Math.abs (travelled)
  }
  function calculatesFarePrice(start, destination) {
    const distance2 = distanceTravelledInFeet(start, destination);
    if (distance2 < 400){
        return 0;
    } else if (distance2 >400 && distance2 <= 2000){
        return Math.abs ((distance2-400)*0.02);
    } else if (distance2 >2000 && distance2 <= 2500){
        return 25
    } else{
        return "cannot travel that far"
    }
    
    

    
  }
