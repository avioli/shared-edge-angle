var findAngle = require('../')
var test = require('tape')

test('angles', function (t) {
  t.equal(findAngle(
    [[0,0,0],[0,1,0],[1,0,0]],
    [[0,0,0],[0,1,0],[0,1,1]]
  )*180/Math.PI, 90, 'orthogonal')
  t.equal(findAngle(
    [[10,20,30],[10,21,30],[11,20,30]],
    [[10,20,30],[10,21,30],[10,21,31]]
  )*180/Math.PI, 90, 'orthogonal shifted')
  t.equal(findAngle(
    [[5,0,0],[10,0,0],[5,0,5]],
    [[5,0,0],[10,0,0],[5,5,5]]
  )*180/Math.PI, 45, '45 deg')
  t.end()
})
