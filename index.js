var dot = require('gl-vec3/dot')
var sub = require('gl-vec3/subtract')
var cross = require('gl-vec3/cross')
var norm = require('gl-vec3/normalize')

var tmp0 = [0,0,0]
var tmp1 = [0,0,0]
var nA = [0,0,0]
var nB = [0,0,0]

module.exports = function (A, B) {
  sub(tmp0, A[1], A[0])
  sub(tmp1, A[2], A[0])
  cross(nA, tmp0, tmp1)
  norm(nA, nA)
  sub(tmp0, B[1], B[0])
  sub(tmp1, B[2], B[0])
  cross(nB, tmp0, tmp1)
  norm(nB, nB)
  return Math.acos(dot(nA, nB))
}
