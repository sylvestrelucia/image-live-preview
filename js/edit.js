$(document).ready(function(){

    const editor =
        "<div class='js-edit__wrapper'>" +
        "<span class='js-edit__upload js-edit__upload--mobile'><i class='fa fa-mobile'></i>" +
        "<input class='js-fileUpload' multiple='multiple' type='file'/>" +
        "<div class='js-image-holder'></div>" +
        "</span>" +
        "<span class='js-edit__upload js-edit__upload--desktop'><i class='fa fa-desktop'></i></span>" +
        "</div>";

    function wrap_images() {
        $("img").wrap("<div class='js-edit__editor'></div>");
        $(".js-edit__editor").append(editor);
    }
    
    function display_hover() {

        $(".js-edit__editor").hover(function(){
            $(this).toggleClass("js-edit--hover");

            var height = $(this).parents("div").outerHeight() - 1;
            var width = $(this).parents("div").outerWidth();
            $(this).find(".js-edit__wrapper").css({ "height": height});
            $(this).find(".js-edit__wrapper").css({ "width": width});
        });


        $("img").mouseout(function(){
            $(this).find(".js-edit__wrapper").remove();
        });
    }


    (function(){
        wrap_images();
        display_hover();
        console.log('Hello World!');
    })();
    
});