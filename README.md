# box2dweb-exporter-physicseditor
Custom exporter for Box2DWeb and Box2DJS for use with PhysicsEditor from CodeAndWeb\
Exported script is an ES6/2015 module

## Directions:
+ Set your custom exporter directory in your preferences for PE.
+ Place the folder named box2d-js-es6 in your custom exporter directory.
+ After publishing and adding the script to your app, create the bodies like so:
  > `import PhysicsData from '/js/PhysicsData.js';`
  >
  > `/*`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`default ptm ratio = 32.`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`If you need to adjust the ptm ratio, plug the number into the constructor method`\
  >`*/`\
  > `const physicsData =  new PhysicsData(64);`
  >
  > `/* created your bodies - args: bodyName, world, bodyType, userData */`\
  > `const brainBody = physicsData.createBody('brain',`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`world,`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`Box2D.Dynamics.b2Body.b2_dynamicBody,`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`{`\
  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`sprite: b.bitmap,`\
  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`ratio: 64,`\
  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`update: b => {...}`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`}`\
  > `);`
  
 
