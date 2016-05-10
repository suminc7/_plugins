

var responsive = (function(){


    function getViewportSize(){
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    function getType(){
        return viewportSize < tabletSize ? "mobile" : (viewportSize > webSize ? "web" : "tablet");
    }
    function setImageSource(type){
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            var path = image.getAttribute('data-path');
            image.src = path +image.getAttribute('data-'+type);
        }
    }
    function changeType(type, viewportSize){
        var len = changedTypeArr.length;
        for(var i = 0;i<len;i++){
            changedTypeArr[i].call(null, type, viewportSize);
        }
    }

    function resize(){
        viewportSize = getViewportSize();
        var type = getType();
        if(currentType != type){
            currentType = type;
            setImageSource(type);
            changeType(type, viewportSize);
        }
    }

    var body = document.body;
    var viewportSize = getViewportSize();
    var images = document.getElementsByTagName('img');
    var queries = body.getAttribute('data-size');
    var queryArray = queries.split(':');
    var currentType = getType();
    
    var changedTypeArr = [], tabletSize = queryArray[0], webSize = queryArray[1];



    setImageSource(currentType);
    


    


    if(window.addEventListener){
        window.addEventListener('resize', resize, false);
    } else { //ie <=8 fix
        window.attachEvent('onresize', resize);
    }
    resize();

    var exports = {
        addChangedType: function(func){
            changedTypeArr.push(func);
        }
    };


    return exports;
}());