// the physcis data 
const b2Vec2 = Box2D.Common.Math.b2Vec2,
    b2BodyDef = Box2D.Dynamics.b2BodyDef,
    b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
    b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
    b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
    b2World = Box2D.Dynamics.b2World;
    
class PhysicsData {

    constructor(ratio = {{ global.ptm_ratio }} ) {
        this.ptm_ratio = ratio; // ptm ratio
        this.dict = {};  
        {% for body in bodies %}
        this.dict["{{body.name}}"] = [
        {% for fixture in body.fixtures %}{% if not forloop.first %} ,{% endif %}
            [
                // density, friction, restitution
                {{fixture.density}}, {{fixture.friction}}, {{fixture.restitution}},
                // categoryBits, maskBits, groupIndex, isSensor
                {{fixture.filter_categoryBits}}, {{fixture.filter_maskBits}}, {{fixture.filter_groupIndex}}, {% if fixture.isSensor %}true{% else %}false{% endif %},
                '{{fixture.type}}',
        {% if fixture.isCircle %}
                // center, radius
                new b2Vec2({{ fixture.center.x | floatformat: 3 }} / this.ptm_ratio, {{ fixture.center.y | floatformat:3 }} / this.ptm_ratio),
                {{ fixture.radius | floatformat: 3 }} / this.ptm_ratio
        {% else %}
                // vertexes of decomposed polygons
                [
        {% for polygon in fixture.polygons %}{% if not forloop.first %} ,{% endif %}
                    [ {% for point in polygon %} {% if not forloop.first %}, {% endif %} new b2Vec2({{ point.x }} / this.ptm_ratio, {{ point.y }} / this.ptm_ratio) {% endfor %} ]{% endfor %}
                ]
        {% endif %}
            ]
        {% endfor %}
        ];
        {% endfor %}
    }

    createBody(name, world, bodyType, userData) {
        // bodytype:
        //  b2_staticBody
        //  b2_kinematicBody
        //  b2_dynamicBody
        const fixtures = this.dict[name],
            bodyDef = new b2BodyDef(); // prepare body def
        //
        bodyDef.type = bodyType;
        bodyDef.userData = userData;
        // create the body
        const body = world.CreateBody(bodyDef);
        // prepare fixtures
        for (let f = 0, ln = fixtures.length; f < ln; f++) {
            const fixture = fixtures[f],
                fixtureDef = new b2FixtureDef();
            //
            fixtureDef.density=fixture[0];
            fixtureDef.friction=fixture[1];
            fixtureDef.restitution=fixture[2];
            fixtureDef.filter.categoryBits = fixture[3];
            fixtureDef.filter.maskBits = fixture[4];
            fixtureDef.filter.groupIndex = fixture[5];
            fixtureDef.isSensor = fixture[6];

            if ( fixture[7] === "POLYGON" ) {                    
                const polygons = fixture[8];
                for (let p = 0, l = polygons.length; p < l; p++)
                {
                    const polygonShape = new b2PolygonShape();
                    polygonShape.SetAsArray(polygons[p], polygons[p].length);
                    fixtureDef.shape=polygonShape;

                    body.CreateFixture(fixtureDef);
                }
            } else if ( fixture[7] === "CIRCLE" ) {
                const circleShape = new b2CircleShape(fixture[9]);                    
                circleShape.SetLocalPosition(fixture[8]);
                fixtureDef.shape=circleShape;
                body.CreateFixture(fixtureDef);                    
            }                
        }

        return body;
    }
}

export default PhysicsData;
