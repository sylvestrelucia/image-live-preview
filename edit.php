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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">" async=""></script>
<script src="http://<?php echo $server_url ?>/js/edit.js"></script>

</body>
</html>