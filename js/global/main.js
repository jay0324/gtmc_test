$(function(){
    var options = {
        globeBackColor: "#8d8d8daa",
        globeFrontColor: "#ccccccbb",
        globeLinesColor: "#00000044",
        rotationIdleSpeedFactor: 10.0,
        rotationSpeedFactor: 1.5,
        wave: false
    };

    var globe = new Globe(document.getElementById("3DView"),options);

    var img = new Image();
    img.src = 'assets/image/taiwan.svg';
    img.onload = function(){
        globe.addImage(23.84216291575367, 121.0111776024701, img, {
            scale: 1.2,
        }, function() {
            // alert("cliked on image");
        });
    }

});