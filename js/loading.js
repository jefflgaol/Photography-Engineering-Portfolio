function fadeOutEffect() {
    /*
    var fadeTarget = document.getElementById("overlay");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 0.7;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        }
        else if (fadeTarget.style.opacity < 0.5){
            clearInterval(fadeEffect);
            fadeTarget.parentNode.removeChild(fadeTarget);
        }
        
    }, 50);
    */

    var fadeTarget=document.getElementById("overlay");
    fadeTarget.style.opacity = '0';
    setTimeout(function(){fadeTarget.parentNode.removeChild(fadeTarget);}, 1000);
    
}
window.addEventListener("load", function () {
      fadeOutEffect();
    });