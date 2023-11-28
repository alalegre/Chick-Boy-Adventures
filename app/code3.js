gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDPlayerObjects4= [];


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setPosition(0 - 14,0 - 1);
}
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects3[k] = gdjs.Level_321Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].setPosition(0 - 22,0 - 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].setPosition(0 - 12,0 - 1);
}
}}

}


};gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{/* Unknown object - skipped. */}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Flippable").flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Jump");
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}{/* Unknown object - skipped. */}}

}


};gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerObjects2[i].getVariableBoolean(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects2[k] = gdjs.Level_321Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].setVariableBoolean(gdjs.Level_321Code.GDPlayerObjects2[i].getVariables().getFromIndex(0), false);
}
}
{ //Subevents
gdjs.Level_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setVariableBoolean(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0), true);
}
}{/* Unknown object - skipped. */}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{


gdjs.Level_321Code.eventsList4(runtimeScene);
}


};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Death1");
}
}}

}


};gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
}

}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList6(runtimeScene);
}


{


gdjs.Level_321Code.eventsList7(runtimeScene);
}


};gdjs.Level_321Code.eventsList9 = function(runtimeScene) {

{



}


{



}


{


/*Link should not have any generated code. You probably wrongly used a link in events without a layout.*/
}


{


gdjs.Level_321Code.eventsList0(runtimeScene);
}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


{


gdjs.Level_321Code.eventsList8(runtimeScene);
}


{


/*Link should not have any generated code. You probably wrongly used a link in events without a layout.*/
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDPlayerObjects4.length = 0;

gdjs.Level_321Code.eventsList9(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
