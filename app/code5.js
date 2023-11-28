gdjs.TutorialCode = {};
gdjs.TutorialCode.GDPlayerObjects1= [];
gdjs.TutorialCode.GDPlayerObjects2= [];
gdjs.TutorialCode.GDPlayerObjects3= [];
gdjs.TutorialCode.GDPlayerObjects4= [];


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Floor", 0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setPosition(0 - 14,0 - 1);
}
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerObjects3[k] = gdjs.TutorialCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].setPosition(0 - 22,0 - 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setPosition(0 - 12,0 - 1);
}
}}

}


};gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}{/* Unknown object - skipped. */}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}{/* Unknown object - skipped. */}}

}


};gdjs.TutorialCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


};gdjs.TutorialCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerObjects2[i].getVariableBoolean(gdjs.TutorialCode.GDPlayerObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerObjects2[k] = gdjs.TutorialCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.TutorialCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setVariableBoolean(gdjs.TutorialCode.GDPlayerObjects2[i].getVariables().getFromIndex(0), false);
}
}
{ //Subevents
gdjs.TutorialCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.TutorialCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true);
}
}{/* Unknown object - skipped. */}}

}


};gdjs.TutorialCode.eventsList5 = function(runtimeScene) {

{


gdjs.TutorialCode.eventsList1(runtimeScene);
}


{


gdjs.TutorialCode.eventsList2(runtimeScene);
}


{


gdjs.TutorialCode.eventsList4(runtimeScene);
}


};gdjs.TutorialCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Death1");
}
}}

}


};gdjs.TutorialCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
}

}


};gdjs.TutorialCode.eventsList8 = function(runtimeScene) {

{


gdjs.TutorialCode.eventsList6(runtimeScene);
}


{


gdjs.TutorialCode.eventsList7(runtimeScene);
}


};gdjs.TutorialCode.eventsList9 = function(runtimeScene) {

{



}


{



}


{


/*Link should not have any generated code. You probably wrongly used a link in events without a layout.*/
}


{


gdjs.TutorialCode.eventsList0(runtimeScene);
}


{


gdjs.TutorialCode.eventsList5(runtimeScene);
}


{


gdjs.TutorialCode.eventsList8(runtimeScene);
}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDPlayerObjects1.length = 0;
gdjs.TutorialCode.GDPlayerObjects2.length = 0;
gdjs.TutorialCode.GDPlayerObjects3.length = 0;
gdjs.TutorialCode.GDPlayerObjects4.length = 0;

gdjs.TutorialCode.eventsList9(runtimeScene);

return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
