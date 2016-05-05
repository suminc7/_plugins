

var responsive = (function(){


    var body = document.body;
    var viewportSize = getViewportSize();

    var images = document.getElementsByTagName('img');


    var queries = body.getAttribute('data-size');
    var queryArray = queries.split(':');


    function getViewportSize(){
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }


    function getType(){
        return viewportSize < queryArray[0] ? "mobile" : (viewportSize > queryArray[1] ? "web" : "tablet");
    }

    var currentType = getType();




    function setImageSource(){
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            var path = image.getAttribute('data-path');
            image.src = path +image.getAttribute('data-'+currentType);
        }
    }
    setImageSource();

    function resize(){
        viewportSize = getViewportSize();

        var type = getType();
        if(currentType != type){
            currentType = type;
            setImageSource();
        }
    }


    if(window.addEventListener){
        window.addEventListener('resize', resize, false);
    } else { //ie <=8 fix
        window.attachEvent('onresize', resize);
    }
    resize();


    //hello
    
    var exports = {
        
    };


    return exports;
}());