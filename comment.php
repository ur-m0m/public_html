<?php 

$file=fopen("comments.txt", "a+");
$name=$_POST["name"];
$text=$_POST["text"];
$entry=$name."\n".$text."\n \n";
file_put_contents("comments.txt", $entry, FILE_APPEND);
fclose($file);
?>

<meta http-equiv="refresh" content="0; url=contact.html">