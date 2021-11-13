function getCircleArea(radius) {
  var pi = Math.PI;
  var rSquared = Math.pow(radius, 2);

  return pi * rSquared;
}

module.exports = getCircleArea
