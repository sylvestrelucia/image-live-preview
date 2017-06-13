$(document).ready(function(){

	const editor =
		"<div class='js-edit__wrapper'>" +
		"<span class='js-edit__upload js-edit__upload--mobile'><i class='fa fa-mobile'></i>" +
		"<input class='js-fileUpload' multiple='multiple' type='file'/>" +
		"<div class='js-image-holder'></div>" +
		"</span>" +
		"<span class='js-edit__upload js-edit__upload--desktop'><i class='fa fa-desktop'></i></span>" +
		"</div>";

	function wrap_image(e) {
		$(e).wrap("<div class='js-edit__editor'></div>");
		$(e).append(editor);
	}

	function display_hover() {

		$("img").hover(function() {
			$(this).addClass("js-edit--hover");

			//wrap_image($(this));

			$(this).after(editor);

			var height = $(this).parent().outerHeight();
			var width = $(this).parent().outerWidth();
			$(this).parent().css({"position": "relative"});
			$(this).parent().find(".js-edit__wrapper").css({"height": height});
			$(this).parent().find(".js-edit__wrapper").css({"width": width});

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

			var elt = $(this).parents(".js-edit__wrapper").prev("img");

			elt.css({"opacity":"0.3"});

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

	function resolve_pointer() {
		$("a").click(function(event){
			event.preventDefault();
		});
	}



	(function(){
		//resolve_pointer();
		//wrap_images();
		display_hover();
		change_image();
		//disable_links();
		console.log('Hello World!');
	})();

});