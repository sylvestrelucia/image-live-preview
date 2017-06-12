$(document).ready(function(){

    const editor =
        "<div class='js-edit__wrapper'>" +
        "<span class='js-edit__upload js-edit__upload--mobile'><i class='fa fa-mobile'></i></span>" +
        "<span class='js-edit__upload js-edit__upload--desktop'><i class='fa fa-desktop'></i></span>" +
        "</div>";

    function change_image(image) {


    }

    function wrap_images() {
        $("img").wrap("<div class='js-edit__editor'></div>");
        $(".js-edit__editor").prepend(editor);
    }
    
    function display_hover() {

        $(".js-edit__editor").hover(function(){
            $(this).toggleClass("js-edit--hover");
        });

        $("img").mouseout(function(){
            $(this).children(".js-edit__wrapper").remove();
        });
    }
    
    function upload_image() {
        
    }


    (function(){
        wrap_images();
        display_hover();
        console.log('Hello World!');
    })();
    
});