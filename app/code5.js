gdjs.TutorialCode = {};
gdjs.TutorialCode.GDPlayerObjects1= [];
gdjs.TutorialCode.GDPlayerObjects2= [];
gdjs.TutorialCode.GDPlayerObjects3= [];
gdjs.TutorialCode.GDPlayerObjects4= [];
gdjs.TutorialCode.GDPlayerHitBoxObjects1= [];
gdjs.TutorialCode.GDPlayerHitBoxObjects2= [];
gdjs.TutorialCode.GDPlayerHitBoxObjects3= [];
gdjs.TutorialCode.GDPlayerHitBoxObjects4= [];


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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setPosition((( gdjs.TutorialCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.TutorialCode.GDPlayerHitBoxObjects1[0].getPointX("")) - 14,(( gdjs.TutorialCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.TutorialCode.GDPlayerHitBoxObjects1[0].getPointY("")) - 1);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects1[i].getBehavior("Resizable").setSize(30, 63);
}
}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 0, 0, "", 0);
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects1[i].hide();
}
}{/* Unknown object - skipped. */}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerHitBoxObjects3[k] = gdjs.TutorialCode.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].setPosition((( gdjs.TutorialCode.GDPlayerHitBoxObjects3.length === 0 ) ? 0 :gdjs.TutorialCode.GDPlayerHitBoxObjects3[0].getPointX("")) - 22,(( gdjs.TutorialCode.GDPlayerHitBoxObjects3.length === 0 ) ? 0 :gdjs.TutorialCode.GDPlayerHitBoxObjects3[0].getPointY("")) - 1);
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].setPosition((( gdjs.TutorialCode.GDPlayerHitBoxObjects2.length === 0 ) ? 0 :gdjs.TutorialCode.GDPlayerHitBoxObjects2[0].getPointX("")) - 12,(( gdjs.TutorialCode.GDPlayerHitBoxObjects2.length === 0 ) ? 0 :gdjs.TutorialCode.GDPlayerHitBoxObjects2[0].getPointY("")) - 1);
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerHitBoxObjects3[k] = gdjs.TutorialCode.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerHitBoxObjects3[k] = gdjs.TutorialCode.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerHitBoxObjects3[k] = gdjs.TutorialCode.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerHitBoxObjects3.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerHitBoxObjects3[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerHitBoxObjects3[k] = gdjs.TutorialCode.GDPlayerHitBoxObjects3[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerHitBoxObjects3.length = k;
if (isConditionTrue_0) {
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

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.TutorialCode.GDPlayerHitBoxObjects2[k] = gdjs.TutorialCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDPlayerHitBoxObjects2.length = k;
if (isConditionTrue_0) {
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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}}

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
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects1[i].setVariableBoolean(gdjs.TutorialCode.GDPlayerObjects1[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(650);
}
}}

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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TutorialCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Death1");
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanNotAirJump();
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects2[i].setX(64);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects2[i].setY(640);
}
}{/* Unknown object - skipped. */}}

}


};gdjs.TutorialCode.asyncCallback10599284 = function (runtimeScene, asyncObjectsList) {
}
gdjs.TutorialCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.TutorialCode.asyncCallback10599284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TutorialCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{/* Unknown object - skipped. */}
{ //Subevents
gdjs.TutorialCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}
{ //Subevents
gdjs.TutorialCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.TutorialCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects1[i].setX(64);
}
}{for(var i = 0, len = gdjs.TutorialCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDPlayerHitBoxObjects1[i].setY(640);
}
}{/* Unknown object - skipped. */}}

}


};gdjs.TutorialCode.eventsList11 = function(runtimeScene) {

{


gdjs.TutorialCode.eventsList6(runtimeScene);
}


{


gdjs.TutorialCode.eventsList9(runtimeScene);
}


{


gdjs.TutorialCode.eventsList10(runtimeScene);
}


};gdjs.TutorialCode.eventsList12 = function(runtimeScene) {

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


gdjs.TutorialCode.eventsList11(runtimeScene);
}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDPlayerObjects1.length = 0;
gdjs.TutorialCode.GDPlayerObjects2.length = 0;
gdjs.TutorialCode.GDPlayerObjects3.length = 0;
gdjs.TutorialCode.GDPlayerObjects4.length = 0;
gdjs.TutorialCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.TutorialCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.TutorialCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.TutorialCode.GDPlayerHitBoxObjects4.length = 0;

gdjs.TutorialCode.eventsList12(runtimeScene);

return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
