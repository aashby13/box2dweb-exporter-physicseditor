# box2dweb-exporter-physicseditor
Custom exporter for Box2DWeb for use with PhysicsEditor from CodeAndWeb\
Exported script is an ES6/2015 module

By default, the script is set up to import the ES2015 Module, box2dweb-haircut:\
https://www.npmjs.com/package/box2dweb-haircut

The import of a CommonJS module of Box2DWeb is included in the comments:\
https://www.npmjs.com/package/box2dweb

*If you need an ES5 version, download version 1.0.2*

## Directions:
+ Set your custom exporter directory in your preferences for PE.
+ Place the folder named box2d-js-es6 in your custom exporter directory.
+ After publishing and adding the script to your app, create the bodies like so:
  > `import Box2D from 'box2dweb-haircut';`\
  > `import PhysicsData from 'PhysicsData';`
  >
  > `/*`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`PE default ptm ratio is 32 and can be edited in the PE UI.`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`If you need to adjust the ptm ratio after publishing, plug the number into the constructor method`\
  >`*/`\
  > `const physicsData =  new PhysicsData(64);`
  >
  > `/* created your bodies - args: bodyName, world, bodyType, userData */`\
  > `const brainBody = physicsData.createBody('brain',`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`world,`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`Box2D.Dynamics.b2Body.b2_dynamicBody,`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`{`\
  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`sprite: brainSprite,`\
  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`ratio: 64,`\
  > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`update: b => {...}`\
  > &nbsp;&nbsp;&nbsp;&nbsp;`}`\
  > `);`
  
 
