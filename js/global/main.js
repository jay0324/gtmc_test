$(function(){
    var options = {
       globeBackColor: "#396A92aa",
       globeFrontColor: "#9AB4CBbb",
       globeLinesColor: "#00000044",
       rotationIdleSpeedFactor: 1.0,
       rotationSpeedFactor: 1.0,
       wave: false
    };

    var globe = new Globe(document.getElementById("3DView"),options);

    var img = new Image();
    img.src = 'assets/image/taiwan.svg';
    img.onload = function(){
        globe.addImage(23.84216291575367, 121.0111776024701, img, {
            scale: 1.2,
        }, function() {
            alert("cliked on image");
        });
    }

});