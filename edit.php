<?php require 'lib/copy.php'; ?>

<head>
    <base href="<?php echo $_POST["url"] ?>">
</head>

<div class="kvasir m-nav">
Welcome <?php echo $_POST["url"]; ?><br>
Your email address is: <?php echo $_POST["login"]; ?>
Your email address is: <?php echo $_POST["password"]; ?>
</div>

<?php

if( isset($_POST["url"])) {
    echo get_web_page($_POST["url"]);
}

?>

