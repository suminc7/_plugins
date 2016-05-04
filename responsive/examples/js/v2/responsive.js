

var responsive = (function(){


    var body = document.body;
    var viewportSize = getViewportSize();

    var images = document.getElementsByTagName('img');


    var queries = body.getAttribute('data-size');
    var queryArray = queries.split(':');
    console.log(queryArray);


    function getViewportSize(){
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    var currentType = "";
    function getType(){
        return viewportSize < queryArray[0] ? "mobile" : (viewportSize > queryArray[1] ? "web" : "tablet");
    }

    currentType = getType();




    function setImageSource(){
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            var path = image.getAttribute('data-path');
            image.src = path + image.getAttribute('data-'+currentType);
        }
    }
    setImageSource();

    function resize(){
        viewportSize = getViewportSize();

        var type = getType();
        if(currentType != type){
            setImageSource();
            currentType = type;
        }
    }


    if(window.addEventListener){
        window.addEventListener('resize', resize, false);
    } else { //ie <=8 fix
        window.attachEvent('onresize', resize);
    }
    resize();



    var hasAttr;
    if(!body.hasAttribute){ //IE <=7 fix

        hasAttr = function(el, attrName){ //IE does not support Object.Prototype
            return el.getAttribute(attrName) !== 'null';
        };

    } else {

        hasAttr = function(el, attrName){
            return el.hasAttribute(attrName);
        };

    }

    hasAttr(body, 'data-size')

    body.hasAttribute('data-size');
    
    var exports = {
        
    };

    console.log(hasAttr(body, 'data-size'));
    console.log(images);

    return exports;
}());