/*
**      Breeze is a CSS/JS responsive framework built on a jQuery library
**      
**      CSS is used only for specific classes and this framework DOES NOT overrides custom CSS and default behaviour
**      like Bootstrap or similar frameworks - all the classes are up to developer to use them or not
**      
**      The issues that Breese is handling are:
**      - overcoming the problems caused by the difference between css window "width" size and javascript window width size
**        caused by the browsers sliders width
**      - loading images only once (responsive design issue) per device load - no new loads of sets of pics on 
**        window resize for one device caused
**      - Effects
*/
/* 
        Created on  : Apr 25, 2017, 10:39:24 AM
        Version     : 1.0 
        Author      : MILAN BABIC - https://www.linkedin.com/in/milanbabic1978/
*/

//INIT!!!!!         CSS_TO_JS_CONNECTOR!!!!!

jQuery(document).ready(function () {
    jQuery("body").append('<div id="css_to_js_connector"></div>');
});
    
var screen_media_connector = {
    connector: 0,
    check: function(todo){
        this.connector = parseInt($("#css_to_js_connector").width());
        if (this.connector === 0 || this.connector === null || this.connector === "undefined" || !this.connector){
            setTimeout(function () {
                screen_media_connector.check();
            }, 20);
        }else{
            this.on_connected();
        }
    },
    on_connected: function(){}
};



//********************* global variables
//
//  *** screen sizes ***
//
//  
//
// 
//
//
//
//
//
//
//              
            



(function($){       //spreadlink, spreadblockedlink, pic/default*checked by plugin
    
        
    //FRAMEWORK INVOKE FUNCTION
    $.fn.insert_image = function(sort,location,action){            //pics URL poziva samo na location
        
        var types = $.extend({
            type: "pic",                                    //pic, pic_expand
            link: false,
            url: "",
            target_blank: false
        },sort);
        
        // initiating pictures
        
        var newlocation = "";
        var locw = location;


        var Object = $.extend({    
                                //odnosi se na big
            sprite_posX: "0px",
            sprite_posY: "298px",
            
            sprite_width: "210px",
            sprite_height: "300px",
            
                                //sirina i visina samog elementa
            big_width: "100%",
            big_height: "auto",
            
            meddium_width: "100%",
            meddium_height: "auto",
            
            small_width: "100%",
            small_height: "auto",
            
                                //samo za pic_expand
            expand: "0",
            transition: "scale 0s ease-in-out",
            cut_expand: false,
            
                                //media uslovi
            connector_10: "big",
            connector_9: "big",
            connector_8: "big",
            connector_7: "big",
            connector_6: "big",
            connector_5: "big",
            connector_4: "big",
            connector_3: "big",
            connector_2: "big",
            connector_1: "big"
        },action);



        //return values
        
        var this_size;
        var src_loaded = false;

        function switchcon(){
            var conn = screen_media_connector.connector;
            if(conn=="10"){
                check(Object.connector_10);
            }
            if(conn=="9"){
                check(Object.connector_9);
            }
            if(conn=="8"){
                check(Object.connector_8);
            }
            if(conn=="7"){
                check(Object.connector_7);
            }
            if(conn=="6"){
                check(Object.connector_6);
            }
            if(conn=="5"){
                check(Object.connector_5);
            } 
            if(conn=="4"){
                check(Object.connector_4);
            }
            if(conn=="3"){
                check(Object.connector_3);
            }
            if(conn=="2"){
                check(Object.connector_2);
            }
            if(conn=="1"){
                check(Object.connector_1);
            }
            
            function check(connector){
                if(connector === "big"){
                    if(!src_loaded){
                        newlocation = locw.big;
                    }
                    this_size = "big";
                }
                if(connector === "meddium"){
                    if(!src_loaded){
                        newlocation = locw.meddium;
                    }
                    this_size = "meddium";
                }
                if(connector === "small"){
                    if(!src_loaded){
                        newlocation = locw.small;
                    }
                    this_size = "small";
                }
            }
            
        }
        
        
        
            
        if(types && (types.type === "pic" || types.type === "pic_expand")){                    //********************** TYPE PICTURE!!!!!
            
            
            return this.each(function () {
                
                // loading pics
                 
                if(Object){
                    var thiss = $(this);
                    screen_media_connector.on_connected = function(){switchcon();dopic();};
                    screen_media_connector.check();
                    
                    function dopic(){
                        thiss.append("<span class='respPicOuterCont'><span class='respPicContainer'></span></span>");
                        var ova_slika = thiss.find(".respPicContainer");
                        var width, height, sprite_width, sprite_height, newheight;
                        newheight = parseFloat(Object.sprite_height)/parseFloat(Object.sprite_width)*100;
                        var new_sprite_width,new_sprite_height,new_pic_width,new_pic_height;
                        var object_sprite_width, object_sprite_height, newposX, newposY;
                        switch (this_size){
                            case "big":
                                width = Object.big_width;
                                height = Object.big_height;
                                sprite_width = parseFloat(location.size_big_width);
                                sprite_height = parseFloat(location.size_big_height);
                                object_sprite_width = parseFloat(Object.sprite_width);
                                object_sprite_height = parseFloat(Object.sprite_height);
                                break;
                            case "meddium":
                                width = Object.meddium_width; 
                                height = Object.meddium_height;
                                sprite_width = parseFloat(location.size_meddium_width);
                                sprite_height = parseFloat(location.size_meddium_height);
                                var meddiumodnos_width = parseFloat(location.size_meddium_width)/parseFloat(location.size_big_width);
                                var meddiumodnos_height = parseFloat(location.size_meddium_height)/parseFloat(location.size_big_height);
                                object_sprite_width = parseFloat(Object.sprite_width)*meddiumodnos_width;
                                object_sprite_height = parseFloat(Object.sprite_height)*meddiumodnos_height;
                                break;
                            case "small":
                                width = Object.small_width; 
                                height = Object.small_height;
                                sprite_width = parseFloat(location.size_small_width);
                                sprite_height = parseFloat(location.size_small_height);
                                var smallodnos_width = parseFloat(location.size_small_width)/parseFloat(location.size_big_width);
                                var smallodnos_height = parseFloat(location.size_small_height)/parseFloat(location.size_big_height);
                                object_sprite_width = parseFloat(Object.sprite_width)*smallodnos_width;
                                object_sprite_height = parseFloat(Object.sprite_height)*smallodnos_height;
                                break;
                        }
                        if(width === "100%" && height === "auto"){
                            ova_slika.css({
                                "width": width,
                                "height": 0,
                                "padding-bottom": newheight+"%"
                            });
                        }else if(width === "auto" && height === "100%"){
                            var newheightforthis = parseFloat(ova_slika.parent().parent().css("height"));
                            var newwidthforthis = newheightforthis * parseFloat(Object.sprite_width) / parseFloat(Object.sprite_height);
                            ova_slika.css({
                                "width": newwidthforthis+"px",
                                "height": 0,
                                "padding-bottom": newheightforthis+"px"
                            });
                        }else{
                            ova_slika.css({
                                "width": width,
                                "height": 0,
                                "padding-bottom": height
                            });
                        }
                        new_pic_width = parseFloat(ova_slika.width());
                        new_pic_height = parseFloat(ova_slika.css("padding-bottom"));
                        var odnosnovostaro_width = new_pic_width/object_sprite_width;
                        var odnosnovostaro_height = new_pic_height/object_sprite_height;
                        new_sprite_width = parseFloat(sprite_width * odnosnovostaro_width);
                        new_sprite_height = parseFloat(sprite_height * odnosnovostaro_height);
                        newposX = new_pic_width * parseFloat(Object.sprite_posX) / parseFloat(Object.sprite_width);
                        newposY = new_pic_height * parseFloat(Object.sprite_posY) / parseFloat(Object.sprite_height);
                        ova_slika.css({
                            "background-image": "url("+newlocation+")",
                            "background-size": new_sprite_width+"px "+new_sprite_height+"px",
                            "background-position": "-" + newposX + "px -" + newposY + "px"
                            
                        });
                        src_loaded = true;
                        
                        
                        
                        
                        
                        //pic_expand
                    
                        if(types.type === "pic_expand"){
                            switch(Object.expand){
                                case "1.1":
                                    ova_slika.addClass("expand_1_1");
                                    break;
                                case "1.2":
                                    ova_slika.addClass("expand_1_2");
                                    break;
                                case "1.3":
                                    ova_slika.addClass("expand_1_3");
                                    break;
                                case "1.4":
                                    ova_slika.addClass("expand_1_4");
                                    break;
                                case "1.5":
                                    ova_slika.addClass("expand_1_5");
                                    break;
                                case "1.6":
                                    ova_slika.addClass("expand_1_6");
                                    break;
                            }
//                            if(Object.cut_expand){                                //cut not working!!!! - radi kroz css na parentu
//                                var matori_width = ova_slika.width();
//                                var matori_height = ova_slika.css("padding-bottom");
//                                ova_slika.parent().css({
//                                    "overflow": "hidden",
//                                    "width": matori_width,
//                                    "height": matori_height
//                                });
//                            }
                            ova_slika.css({
                                "-webkit-transition": Object.transition,
                                "-moz-transition": Object.transition,
                                "-o-transition": Object.transition,
                                "transition": Object.transition
                            });
                            
                        }
                        
                        
                        
                        //link
                        if(types.link){
                            ova_slika.css({
                                "cursor": "pointer"
                            });
                            ova_slika.click (function () {
                                if(types.target_blank){
                                    window.open(types.url);
                                }else{
                                    window.location = types.url;
                                }
                            });
                        }
                        
                        
                        
                    }
                    
                    
                    
                    $(window).resize (function () {
                        thiss.empty();
                        screen_media_connector.on_connected = function(){switchcon();dopic();};
                        screen_media_connector.check();
                    });
                    
                }
                 
            },console.log("insert_image fn done!"));

        } //end if pic
        
        
        
        
    };  // end of $.fn.insert_image
    
}(jQuery));