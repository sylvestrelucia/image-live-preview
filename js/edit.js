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

            var height = $(this).parent().outerHeight();
            var width = $(this).parent().outerWidth();
            $(this).parent().css({ "position": "relative"});
            $(this).find(".js-edit__wrapper").css({ "height": height});
            $(this).find(".js-edit__wrapper").css({ "width": width});
        });


        $("img").mouseout(function(){
            $(this).find(".js-edit__wrapper").remove();
        });
    }


    function disable_links() {
	    $('a').click(function(e) {
		    e.preventDefault();
		    //do other stuff when a click happens
	    });
    }

    function change_image() {

	    $(".js-fileUpload").on( "click", function() {

	        var elt = $(this).parents(".js-edit__editor").children("img");
            
		    $(this).on('change', function() {

			    //Get count of selected files
			    var countFiles = $(this)[0].files.length;
			    var imgPath = $(this)[0].value;
			    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
			    var image_holder = $(elt);
			    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
				    if (typeof(FileReader) != "undefined") {
					    //loop for each file selected for uploaded.
					    for (var i = 0; i < countFiles; i++)
					    {
						    var reader = new FileReader();
						    reader.onload = function(e) {
							    $((image_holder).attr('src', e.target.result));
							    $((image_holder).attr('srcset', e.target.result + " 1x, " + e.target.result + "2x" ));
						    }
						    reader.readAsDataURL($(this)[0].files[i]);
					    }
				    } else {
					    alert("This browser does not support FileReader.");
				    }
			    } else {
				    alert("Pls select only images");
			    }
		    });


	    });

    }



    (function(){
        wrap_images();
        display_hover();
        change_image();
        //disable_links();
        console.log('Hello World!');
    })();
    
});