$(document).ready(function(){

    const editor =
        "<div class='js-edit__wrapper'>" +
        "<span class='js-edit__upload js-edit__upload--mobile'><i class='fa fa-mobile'></i>" +
        "<input class='js-fileUpload' multiple='multiple' type='file'/>" +
        "</span>" +
        "</div>";

    function display_hover() {

    	$("*")

        $("img").on('click', function() {

	        var $this = $(this);
	        if ($this.hasClass("js-edit--active")) {
		        // already been clicked once, hide it
		        $(this).removeClass("js-edit--active");
		        $(".js-edit__wrapper").remove();
	        }
	        else {
		        // first time this is clicked, mark it
		        $this.addClass("js-edit--active");
		        $(this).after(editor);
	        }

	        //$(this).toggleClass("js-edit--hover");
	        //var height = $(this).parent().outerHeight();
	        //var width = $(this).parent().outerWidth();
	        //$(this).parent().css({ "position": "relative"});
	        //$(this).find(".js-edit__wrapper").css({ "height": height});
	        //$(this).find(".js-edit__wrapper").css({ "width": width});


	        //$(this).find(".js-edit__wrapper").remove();
	        //$(this).unwrap();

        });

        $(this).next().mouseleave(function() {
		    //$(this).removeClass("js-edit--active");
		    $(this).remove();
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
				    alert("Please select only images");
			    }
		    });


	    });

    }

	function resolve_pointer() {
		$("a").click(function(event){
			event.preventDefault();
		});
	}

    (function init(){
        //wrap_images();
        display_hover();
	    resolve_pointer();
        change_image();
        //disable_links();
        console.log('Hello World!');
    })();
    
});