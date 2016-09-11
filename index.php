
<?php

$add=$_SERVER['REMOTE_ADDR'];
if (substr($add, 4,1)==".") $hno=substr($add, 3,1);
 else $hno=substr($add,3,2);
?> 

<!DOCTYPE HTML>

<html lang="en-us" >

<head>
<title> My Webpage </title>
<link rel="stylesheet" href="style.css" /> 
<script type="text/javascript"src="javas.js"></script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body onload="hiWheel();">
<div id="topsec" style="height:100vh; width:100vw;overflow:hidden;">
<h1> Home</h1>
<div>
<audio><source id="welcome" src="save.wav"></source></audio>
<div id="hiwheel" style="width:100vw;height:100vh;position:fixed;top:0; z-index:3"></div>
<svg><a class="menu" xlink:href="index.php">
	<circle id="c" onmouseover="clinkain();" onmouseout="clinkaout();"cx=100% cy=100% r=40% fill=#fff stroke-width=3 />
	<text id="texta" fill=#fff x=55% y=55% font-family="Verdana"font-size=160%></text>
</a></svg>
<svg><a class="menu" xlink:href="aboutme.html">
	<circle id="c"cx=0 cy=100% r=40% onmouseover="clinkbin();" onmouseout="clinkbout();" fill=#fff stroke-width=3 />
	<text id="textb" fill=#fff x=36% y=45% font-family="Verdana"font-size=160%></text>
</a></svg>
<svg><a class="menu" xlink:href="gallery.html">
	<circle id="c"cx=100% cy=0% r=40% onmouseover="clinkcin();" onmouseout="clinkcout();" fill=#fff stroke-width=3 />
	<text id="textc" fill=#fff x=55% y=55% font-family="Verdana"font-size=160%></text>
</a></svg>
<svg><a class="menu" xlink:href="contact.html">
	<circle id="c" r=40% onmouseover="clinkdin();" onmouseout="clinkdout();"fill=#fff stroke-width=3 />
	<text id="textd" fill=#fff x=38% y=45% font-family="Verdana"font-size=160%></text>
</a></svg>
</div>
</div>

<!--<div id="menu">\
		<a id="l"class="link" href="index.php"><div id="menuitem"> Home</div></a>
		<a class="link"href="aboutme.html"><div id="menuitem"> About Me</div></a>
		<a class="link" href="gallery.html"><div id="menuitem"> Gallery</div></a>
		<a class="link"href="contact.html"><div id="menuitem">Contact Me</div></a>
</div>
-->
<div id="section" style="height:100vh;visibility: hidden;">
<p id="des">There is nothing better than sitting in a hostel <?php if ($hno<17 && $hno>=1)echo $hno?> room and sip hot coffee on a rainy day, isn't it? 
The comforting warmth of the beverage as it trickles down your throat is something words can't comprehend.
By this time, you must have realised the superfluous nature the out-of-the-blue talk about some cup of water and beans. Well, that's how I am.
What more do you want to know about me? <br><i class="material-icons md-18">sentiment_very_satisfied</i></p>
</div>
</body>
</html>
