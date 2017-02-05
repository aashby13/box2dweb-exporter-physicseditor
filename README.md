# box2dweb-exporter-physicseditor
Custom exporter for Box2DWeb and Box2DJS for use with PhysicsEditor from CodeAndWeb

## Directions:
+ Set your custom exporter directory in your preferences for PE.
+ Place the folder named box2d-js in your custom exporter directory.
+ After publishing and load the PhysicsData.js to your page, created the bodies like so:
  - if you need to adjust the ptm ratio do it before initializing. FYI PhysicsData is in the global scope:  
  *PhysicsData.ptm_ratio = 32;*
  - initailize PhysicsData:  
  *PhysicsData.init();*
  - created your bodies. args: bodyName, world, bodyType, userData:  
  *var brainBody = PhysicsData.createBody('brain', world, Box2D.Dynamics.b2Body.b2_dynamicBody, {sprite:b.bitmap, ratio:32, update:function(b){...}});*
