function f_resizeBack (){
    var back = [...document.querySelectorAll('.m-back')];

    for (var i in back) {
        var el = back[i];
        var val = '-'+el.offsetTop+'px';
        
        el.style.backgroundPositionY = val;
    }
}

window.addEventListener("load",f_resizeBack);
window.addEventListener("resize",f_resizeBack);