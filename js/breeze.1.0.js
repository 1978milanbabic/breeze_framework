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
    


//********************* global variables
//
                
            



(function($){       //spreadlink, spreadblockedlink, pic/default*checked by plugin
    
        
    //FRAMEWORK INVOKE FUNCTION
    $.fn.insert_image = function(sort,location,action){            //pics URL poziva samo na location
        
        var types = $.extend({
            type: "pic",                                    //pic, pic_expand
            link: false,
            target_blank: false
        },sort);
        
        // initiating pictures

        var connector="0";
        var newlocation = "";
        var locw = location;

        function connectora(){
            var bw = parseInt($("#css_to_js_connector").width());
            if (bw!=3 && bw!=2 && bw!=1){
                setTimeout(function () {
                    connectora();
                }, 20);
            }else{
                connector = bw;
                switchcon(connector);
            }
        };       




        var Object = $.extend({              
            s_posX: "0",
            s_posY: "0",
            s_width: "",
            s_height: "",
            width: "100%",
            height: "100%",
            expandX: "0",
            expandY: "0",
            cut_expand: false
        },action);



        //return values

        function switchcon(connector){
            if(connector=="3"){
                newlocation = locw.big;
            }
            if(connector=="2"){
                newlocation = locw.meddium;
            }
            if(connector=="1"){
                newlocation = locw.small;
            } 
        }
            
        if(types && types.type === "pic"){                    //********************** TYPE PICTURE!!!!!
            
            
            
            
            return this.each(function () {
                
                // loading pics
                    
                if(location){
                    if (newlocation==""){
                        connectora();
                    }
                }
                
                 
                if(Object){
                    var thiss = $(this);
                    check_conn();
                    
                    function dopic(){
                        thiss.append("<div class='breeze'></div>");
                        thiss.find(".breeze").css({
                            "background-image": "url("+newlocation+")",
                            "width": Object.width,
                            "height": Object.height,
                            "background-size": location.size_big,
                            "background-position": "-" + Object.s_posX + " -" + Object.s_posY
                        });
                    }
                    
                    
                    function check_conn(){
                        if(connector==0){
                            connectora();
                            setTimeout(function () {
                                check_conn();
                            }, 20);
                        }else{
                            dopic();
                        }
                    }
                    
                }
                 
            },console.log("Image inserted!"));

        } //end if pic
        
        
        
        
    };  // end of $.fn.breeze
    
}(jQuery));