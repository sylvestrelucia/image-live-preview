<?php require 'lib/copy.php'; ?>
<?php
    $server_url = $_SERVER['HTTP_HOST'];
?>

<html>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width">
    <title>Responsive image live preview</title>
    <base href="<?php echo $_POST["url"] ?>">
    <link rel="stylesheet" href="http://<?php echo $server_url ?>/vendor/siroop/frontend/public/dist/css/default.min.css">
    <link rel="stylesheet" href="http://<?php echo $server_url ?>/public/css/main.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,400i,500,700%7CRoboto+Condensed:300,400,700%7CMate:400i%7CYrsa:400" media="all">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

<script type="text/javascript" src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
<script src="http://<?php echo $server_url ?>/js/edit.js"></script>


<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" async=""></script>

<div class="kvasir m-nav">
    <span><b><?php echo $_POST["url"]; ?></b> was copied!</span>
    <span>Hover on the images on on the page to edit them.</span>
</div>

<?php
    if( isset($_POST["url"])) {
        echo get_web_page($_POST["url"]);
    }
?>

<div id="wrapper"><input class="js-fileUpload" multiple="multiple" type="file"/>
    <div class="js-image-holder"></div>
</div>

<script>
    $(document).ready(function() {
        $(".js-fileUpload").on('change', function() {
            //Get count of selected files
            var countFiles = $(this)[0].files.length;
            var imgPath = $(this)[0].value;
            var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
            var image_holder = $(".js-image-holder");
            image_holder.empty();
            if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
                if (typeof(FileReader) != "undefined") {
                    //loop for each file selected for uploaded.
                    for (var i = 0; i < countFiles; i++)
                    {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $("<img />", {
                                "src": e.target.result,
                                "class": "thumb-image"
                            }).appendTo(image_holder);
                        }
                        image_holder.show();
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
</script>

</body>
</html>