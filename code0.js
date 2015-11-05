gdjs.FirstCode = {};
gdjs.FirstCode.forEachIndex2 = 0;

gdjs.FirstCode.forEachIndex3 = 0;

gdjs.FirstCode.forEachObjects2 = [];

gdjs.FirstCode.forEachObjects3 = [];

gdjs.FirstCode.forEachTemporary2 = null;

gdjs.FirstCode.forEachTemporary3 = null;

gdjs.FirstCode.forEachTotalCount2 = 0;

gdjs.FirstCode.forEachTotalCount3 = 0;

gdjs.FirstCode.repeatCount3 = 0;

gdjs.FirstCode.repeatIndex3 = 0;



gdjs.FirstCode.GDcarObjects1= [];
gdjs.FirstCode.GDcarObjects2= [];
gdjs.FirstCode.GDcarObjects3= [];
gdjs.FirstCode.GDcarObjects4= [];
gdjs.FirstCode.GDTextMessageObjects1= [];
gdjs.FirstCode.GDTextMessageObjects2= [];
gdjs.FirstCode.GDTextMessageObjects3= [];
gdjs.FirstCode.GDTextMessageObjects4= [];
gdjs.FirstCode.GDReferenceCarObjects1= [];
gdjs.FirstCode.GDReferenceCarObjects2= [];
gdjs.FirstCode.GDReferenceCarObjects3= [];
gdjs.FirstCode.GDReferenceCarObjects4= [];

gdjs.FirstCode.conditionTrue_0 = {val:false};
gdjs.FirstCode.condition0IsTrue_0 = {val:false};
gdjs.FirstCode.condition1IsTrue_0 = {val:false};
gdjs.FirstCode.condition2IsTrue_0 = {val:false};
gdjs.FirstCode.conditionTrue_1 = {val:false};
gdjs.FirstCode.condition0IsTrue_1 = {val:false};
gdjs.FirstCode.condition1IsTrue_1 = {val:false};
gdjs.FirstCode.condition2IsTrue_1 = {val:false};

gdjs.FirstCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.FirstCode.GDcarObjects1.length = 0;
gdjs.FirstCode.GDcarObjects2.length = 0;
gdjs.FirstCode.GDcarObjects3.length = 0;
gdjs.FirstCode.GDcarObjects4.length = 0;
gdjs.FirstCode.GDTextMessageObjects1.length = 0;
gdjs.FirstCode.GDTextMessageObjects2.length = 0;
gdjs.FirstCode.GDTextMessageObjects3.length = 0;
gdjs.FirstCode.GDTextMessageObjects4.length = 0;
gdjs.FirstCode.GDReferenceCarObjects1.length = 0;
gdjs.FirstCode.GDReferenceCarObjects2.length = 0;
gdjs.FirstCode.GDReferenceCarObjects3.length = 0;
gdjs.FirstCode.GDReferenceCarObjects4.length = 0;


{

gdjs.FirstCode.GDTextMessageObjects1.createFrom(runtimeScene.getObjects("TextMessage"));

gdjs.FirstCode.condition0IsTrue_0.val = false;
{
gdjs.FirstCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.FirstCode.GDTextMessageObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDTextMessageObjects1[i].hide();
}
}
{ //Subevents

{

gdjs.FirstCode.GDReferenceCarObjects2.createFrom(runtimeScene.getObjects("ReferenceCar"));

for(gdjs.FirstCode.forEachIndex3 = 0;gdjs.FirstCode.forEachIndex3 < gdjs.FirstCode.GDReferenceCarObjects2.length;++gdjs.FirstCode.forEachIndex3) {
gdjs.FirstCode.GDReferenceCarObjects3.createFrom(gdjs.FirstCode.GDReferenceCarObjects2);

gdjs.FirstCode.forEachTemporary3 = gdjs.FirstCode.GDReferenceCarObjects2[gdjs.FirstCode.forEachIndex3];
gdjs.FirstCode.GDReferenceCarObjects3.length = 0;
gdjs.FirstCode.GDReferenceCarObjects3.push(gdjs.FirstCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.FirstCode.GDReferenceCarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDReferenceCarObjects3[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.FirstCode.GDReferenceCarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDReferenceCarObjects3[i].setAnimationFrame((gdjs.RuntimeObject.getVariableNumber(gdjs.FirstCode.GDReferenceCarObjects3[i].getVariables().get("ID"))));
}
}{for(var i = 0, len = gdjs.FirstCode.GDReferenceCarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDReferenceCarObjects3[i].pauseAnimation();
}
}}
}

}


{

gdjs.FirstCode.GDcarObjects2.createFrom(runtimeScene.getObjects("car"));

gdjs.FirstCode.repeatCount3 = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("car", gdjs.FirstCode.GDcarObjects2).getEventsObjectsMap());
for(gdjs.FirstCode.repeatIndex3 = 0;gdjs.FirstCode.repeatIndex3 < gdjs.FirstCode.repeatCount3;++gdjs.FirstCode.repeatIndex3) {

if (true)
{
{runtimeScene.getVariables().get("Line").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7))).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


gdjs.FirstCode.repeatCount3 = 10;
for(gdjs.FirstCode.repeatIndex3 = 0;gdjs.FirstCode.repeatIndex3 < gdjs.FirstCode.repeatCount3;++gdjs.FirstCode.repeatIndex3) {
gdjs.FirstCode.GDcarObjects3.createFrom(runtimeScene.getObjects("car"));

if (true)
{
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.random(gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("car", gdjs.FirstCode.GDcarObjects3).getEventsObjectsMap()) - 1));
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.random(gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("car", gdjs.FirstCode.GDcarObjects3).getEventsObjectsMap()) - 1));
}{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Line").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)))));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Line").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)))));
}{runtimeScene.getVariables().get("Line").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0))).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}{runtimeScene.getVariables().get("Line").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1))).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}}
}

}


{

gdjs.FirstCode.GDcarObjects2.createFrom(runtimeScene.getObjects("car"));

for(gdjs.FirstCode.forEachIndex3 = 0;gdjs.FirstCode.forEachIndex3 < gdjs.FirstCode.GDcarObjects2.length;++gdjs.FirstCode.forEachIndex3) {
gdjs.FirstCode.GDcarObjects3.createFrom(gdjs.FirstCode.GDcarObjects2);

gdjs.FirstCode.forEachTemporary3 = gdjs.FirstCode.GDcarObjects2[gdjs.FirstCode.forEachIndex3];
gdjs.FirstCode.GDcarObjects3.length = 0;
gdjs.FirstCode.GDcarObjects3.push(gdjs.FirstCode.forEachTemporary3);
if (true) {
{for(var i = 0, len = gdjs.FirstCode.GDcarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDcarObjects3[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.FirstCode.GDcarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDcarObjects3[i].setVariableNumber(gdjs.FirstCode.GDcarObjects3[i].getVariables().get("CarFrame"), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Line").getChild((gdjs.RuntimeObject.getVariableString(gdjs.FirstCode.GDcarObjects3[i].getVariables().get("CarID"))))));
}
}{for(var i = 0, len = gdjs.FirstCode.GDcarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDcarObjects3[i].setAnimationFrame((gdjs.RuntimeObject.getVariableNumber(gdjs.FirstCode.GDcarObjects3[i].getVariables().get("CarFrame"))));
}
}{for(var i = 0, len = gdjs.FirstCode.GDcarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDcarObjects3[i].pauseAnimation();
}
}}
}

}


{

gdjs.FirstCode.GDcarObjects2.createFrom(runtimeScene.getObjects("car"));

for(gdjs.FirstCode.forEachIndex3 = 0;gdjs.FirstCode.forEachIndex3 < gdjs.FirstCode.GDcarObjects2.length;++gdjs.FirstCode.forEachIndex3) {
gdjs.FirstCode.GDcarObjects3.createFrom(gdjs.FirstCode.GDcarObjects2);

gdjs.FirstCode.forEachTemporary3 = gdjs.FirstCode.GDcarObjects2[gdjs.FirstCode.forEachIndex3];
gdjs.FirstCode.GDcarObjects3.length = 0;
gdjs.FirstCode.GDcarObjects3.push(gdjs.FirstCode.forEachTemporary3);
if (true) {

{ //Subevents: 

{

gdjs.FirstCode.GDcarObjects4.createFrom(gdjs.FirstCode.GDcarObjects3);

gdjs.FirstCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstCode.GDcarObjects4.length;i<l;++i) {
    if ( gdjs.FirstCode.GDcarObjects4[i].getVariableNumber(gdjs.FirstCode.GDcarObjects4[i].getVariables().get("CarFrame")) == (gdjs.RuntimeObject.getVariableNumber(gdjs.FirstCode.GDcarObjects4[i].getVariables().get("CarID"))) ) {
        gdjs.FirstCode.condition0IsTrue_0.val = true;
        gdjs.FirstCode.GDcarObjects4[k] = gdjs.FirstCode.GDcarObjects4[i];
        ++k;
    }
}
gdjs.FirstCode.GDcarObjects4.length = k;}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}

}

} //Subevents end.
}
}

}

} //End of subevents
}

}


{

gdjs.FirstCode.GDcarObjects1.createFrom(runtimeScene.getObjects("car"));

gdjs.FirstCode.condition0IsTrue_0.val = false;
{
gdjs.FirstCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("car", gdjs.FirstCode.GDcarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.FirstCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.FirstCode.condition0IsTrue_0.val = false;
gdjs.FirstCode.condition1IsTrue_0.val = false;
{
gdjs.FirstCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.FirstCode.condition0IsTrue_0.val ) {
{
{gdjs.FirstCode.conditionTrue_1 = gdjs.FirstCode.condition1IsTrue_0;
gdjs.FirstCode.conditionTrue_1.val = context.triggerOnce(140239960521384);
}
}}
if (gdjs.FirstCode.condition1IsTrue_0.val) {

{ //Subevents

{


gdjs.FirstCode.condition0IsTrue_0.val = false;
{
gdjs.FirstCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 2;
}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.FirstCode.GDcarObjects3.createFrom(gdjs.FirstCode.GDcarObjects1);

gdjs.FirstCode.condition0IsTrue_0.val = false;
{
gdjs.FirstCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber((( gdjs.FirstCode.GDcarObjects3.length === 0 ) ? 0 :gdjs.FirstCode.GDcarObjects3[0].getPointX("")));
}}

}


{

gdjs.FirstCode.GDcarObjects3.createFrom(gdjs.FirstCode.GDcarObjects1);

gdjs.FirstCode.condition0IsTrue_0.val = false;
{
gdjs.FirstCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber((( gdjs.FirstCode.GDcarObjects3.length === 0 ) ? 0 :gdjs.FirstCode.GDcarObjects3[0].getPointX("")));
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{


gdjs.FirstCode.condition0IsTrue_0.val = false;
{
gdjs.FirstCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(1 + Math.floor((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6))-gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)))/gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}
{ //Subevents

{

gdjs.FirstCode.GDcarObjects2.createFrom(runtimeScene.getObjects("car"));

for(gdjs.FirstCode.forEachIndex3 = 0;gdjs.FirstCode.forEachIndex3 < gdjs.FirstCode.GDcarObjects2.length;++gdjs.FirstCode.forEachIndex3) {
gdjs.FirstCode.GDcarObjects3.createFrom(gdjs.FirstCode.GDcarObjects2);

gdjs.FirstCode.forEachTemporary3 = gdjs.FirstCode.GDcarObjects2[gdjs.FirstCode.forEachIndex3];
gdjs.FirstCode.GDcarObjects3.length = 0;
gdjs.FirstCode.GDcarObjects3.push(gdjs.FirstCode.forEachTemporary3);
gdjs.FirstCode.condition0IsTrue_0.val = false;
{
{gdjs.FirstCode.conditionTrue_1 = gdjs.FirstCode.condition0IsTrue_0;
gdjs.FirstCode.condition0IsTrue_1.val = false;
gdjs.FirstCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstCode.GDcarObjects3.length;i<l;++i) {
    if ( gdjs.FirstCode.GDcarObjects3[i].getX() >= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) ) {
        gdjs.FirstCode.condition0IsTrue_1.val = true;
        gdjs.FirstCode.GDcarObjects3[k] = gdjs.FirstCode.GDcarObjects3[i];
        ++k;
    }
}
gdjs.FirstCode.GDcarObjects3.length = k;}if ( gdjs.FirstCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.FirstCode.GDcarObjects3.length;i<l;++i) {
    if ( gdjs.FirstCode.GDcarObjects3[i].getX() <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) ) {
        gdjs.FirstCode.condition1IsTrue_1.val = true;
        gdjs.FirstCode.GDcarObjects3[k] = gdjs.FirstCode.GDcarObjects3[i];
        ++k;
    }
}
gdjs.FirstCode.GDcarObjects3.length = k;}}
gdjs.FirstCode.conditionTrue_1.val = true && gdjs.FirstCode.condition0IsTrue_1.val && gdjs.FirstCode.condition1IsTrue_1.val;
}
}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("x").setNumber((( gdjs.FirstCode.GDcarObjects3.length === 0 ) ? 0 :gdjs.FirstCode.GDcarObjects3[0].getPointX("")) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}{runtimeScene.getVariables().getFromIndex(5).setNumber(Math.floor(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("x"))/gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))) + 1);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)))*gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}{for(var i = 0, len = gdjs.FirstCode.GDcarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDcarObjects3[i].setX(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)));
}
}{for(var i = 0, len = gdjs.FirstCode.GDcarObjects3.length ;i < len;++i) {
    gdjs.FirstCode.GDcarObjects3[i].setVariableNumber(gdjs.FirstCode.GDcarObjects3[i].getVariables().get("CarID"), (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5))) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)))/gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}
}

}


{


{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

} //End of subevents
}

}


{


{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(-1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}
}


{

gdjs.FirstCode.GDcarObjects1.createFrom(runtimeScene.getObjects("car"));

for(gdjs.FirstCode.forEachIndex2 = 0;gdjs.FirstCode.forEachIndex2 < gdjs.FirstCode.GDcarObjects1.length;++gdjs.FirstCode.forEachIndex2) {
gdjs.FirstCode.GDcarObjects2.createFrom(gdjs.FirstCode.GDcarObjects1);

gdjs.FirstCode.forEachTemporary2 = gdjs.FirstCode.GDcarObjects1[gdjs.FirstCode.forEachIndex2];
gdjs.FirstCode.GDcarObjects2.length = 0;
gdjs.FirstCode.GDcarObjects2.push(gdjs.FirstCode.forEachTemporary2);
if (true) {

{ //Subevents: 

{

gdjs.FirstCode.GDcarObjects3.createFrom(gdjs.FirstCode.GDcarObjects2);

gdjs.FirstCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.FirstCode.GDcarObjects3.length;i<l;++i) {
    if ( gdjs.FirstCode.GDcarObjects3[i].getVariableNumber(gdjs.FirstCode.GDcarObjects3[i].getVariables().get("CarFrame")) == (gdjs.RuntimeObject.getVariableNumber(gdjs.FirstCode.GDcarObjects3[i].getVariables().get("CarID"))) ) {
        gdjs.FirstCode.condition0IsTrue_0.val = true;
        gdjs.FirstCode.GDcarObjects3[k] = gdjs.FirstCode.GDcarObjects3[i];
        ++k;
    }
}
gdjs.FirstCode.GDcarObjects3.length = k;}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}

}

} //Subevents end.
}
}

}


{

gdjs.FirstCode.GDReferenceCarObjects1.createFrom(runtimeScene.getObjects("ReferenceCar"));
gdjs.FirstCode.GDTextMessageObjects1.createFrom(runtimeScene.getObjects("TextMessage"));

gdjs.FirstCode.condition0IsTrue_0.val = false;
{
gdjs.FirstCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("ReferenceCar", gdjs.FirstCode.GDReferenceCarObjects1).getEventsObjectsMap());
}if (gdjs.FirstCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.FirstCode.GDTextMessageObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDTextMessageObjects1[i].setString("You did it in " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + " moves !");
}
}{for(var i = 0, len = gdjs.FirstCode.GDTextMessageObjects1.length ;i < len;++i) {
    gdjs.FirstCode.GDTextMessageObjects1[i].hide(false);
}
}}

}

return;
}
gdjs['FirstCode']= gdjs.FirstCode;
