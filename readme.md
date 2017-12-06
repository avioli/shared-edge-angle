# shared-edge-angle

calculate the angle between two triangles in 3d with a shared edge

# example

``` js
var findAngle = require('shared-edge-angle')
var A = [[0,0,0],[0,1,0],[1,0,0]]
var B = [[0,0,0],[0,1,0],[0,1,1]]
console.log(findAngle(A,B)*180/Math.PI)
```

output:

```
90
```

# api

``` js
var findAngle = require('shared-edge-angle')
```

## var angle = findAngle(A, B)

Calculate the `angle` between triangles `A` and `B` in radians.

`A` and `B` are presumed to have a shared edge.

Each triangle in `A` and `B` should be 3-element array of 3-element `[x,y,z]`
triangle coordinates.

# install

npm install shared-edge-angle

# license

BSD
