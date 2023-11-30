gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDPlayerObjects4= [];
gdjs.Level_321Code.GDPlayerHitBoxObjects1= [];
gdjs.Level_321Code.GDPlayerHitBoxObjects2= [];
gdjs.Level_321Code.GDPlayerHitBoxObjects3= [];
gdjs.Level_321Code.GDPlayerHitBoxObjects4= [];


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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerHitBoxObjects1[0].getPointX("")) - 14,(( gdjs.Level_321Code.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerHitBoxObjects1[0].getPointY("")) - 1);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("Resizable").setSize(30, 63);
}
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 0, 0, "", 0);
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].hide();
}
}{/* Unknown object - skipped. */}}

}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects3[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].setPosition((( gdjs.Level_321Code.GDPlayerHitBoxObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerHitBoxObjects3[0].getPointX("")) - 22,(( gdjs.Level_321Code.GDPlayerHitBoxObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerHitBoxObjects3[0].getPointY("")) - 1);
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].setPosition((( gdjs.Level_321Code.GDPlayerHitBoxObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerHitBoxObjects2[0].getPointX("")) - 12,(( gdjs.Level_321Code.GDPlayerHitBoxObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerHitBoxObjects2[0].getPointY("")) - 1);
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects3[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects3[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects3[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects3[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
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

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerHitBoxObjects2[k] = gdjs.Level_321Code.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerHitBoxObjects2.length = k;
if (isConditionTrue_0) {
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}}

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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setVariableBoolean(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(650);
}
}}

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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Death1");
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanNotAirJump();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].setX(64);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects2[i].setY(640);
}
}{/* Unknown object - skipped. */}}

}


};gdjs.Level_321Code.asyncCallback10599284 = function (runtimeScene, asyncObjectsList) {
}
gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level_321Code.asyncCallback10599284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.Level_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}
{ //Subevents
gdjs.Level_321Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.Level_321Code.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].setX(64);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerHitBoxObjects1[i].setY(640);
}
}{/* Unknown object - skipped. */}}

}


};gdjs.Level_321Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level_321Code.eventsList6(runtimeScene);
}


{


gdjs.Level_321Code.eventsList9(runtimeScene);
}


{


gdjs.Level_321Code.eventsList10(runtimeScene);
}


};gdjs.Level_321Code.eventsList12 = function(runtimeScene) {

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


gdjs.Level_321Code.eventsList11(runtimeScene);
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
gdjs.Level_321Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.Level_321Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.Level_321Code.GDPlayerHitBoxObjects3.length = 0;
gdjs.Level_321Code.GDPlayerHitBoxObjects4.length = 0;

gdjs.Level_321Code.eventsList12(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
