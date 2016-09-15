function clinkain(){
	document.getElementById("texta").innerHTML="Home";
}

function clinkaout(){
	document.getElementById("texta").innerHTML="";
}

function clinkbin(){
	document.getElementById("textb").innerHTML="About Me";
}

function clinkbout(){
	document.getElementById("textb").innerHTML="";
}

function clinkcin(){
	document.getElementById("textc").innerHTML="Gallery";
}

function clinkcout(){
	document.getElementById("textc").innerHTML="";
}

function clinkdin(){
	document.getElementById("textd").innerHTML="Contact Me";
}
function clinkdout(){
	document.getElementById("textd").innerHTML="";
}
var i;
y=(6*window.outerHeight+5*window.innerHeight)/10;
var Y=window.innerHeight;
function scrolls(){
if(y>=725){var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
document.addEventListener("scroll", function(){
	   var st = window.pageYOffset || document.documentElement.scrollTop;
	  if(st==Y && i==0) {location.reload(); i=1;return;}
	   if (st<Y) {
   if (st >= lastScrollTop){
       {
      	setTimeout(function(){window.scrollBy(0,70*y/1000-(.000045*y*st));},.01*1000/y);
      	if (st<=y+7*(Math.pow(y,6))/Math.pow(1000,6) && st>=y-7*(Math.pow(y,6))/Math.pow(1000,6)) {location.reload(); i=1;return};
      } 
      
  }else {
    	 setTimeout(function(){window.scrollBy(0,-70*y/1000+(.000045*y*(y-st)));},.01*1000/y);
    	 i=0;
   }
   lastScrollTop = st;
}}, false)}
if(st>9*y/10){location.reload();}
}
var x=window.innerWidth;
function removeWheel(){
	if (j<=5){ document.getElementById("hiwheel").remove();
		mySound.play();
		document.getElementById("section").style.visibility="visible";}
	if (j>90) {document.getElementById("hiwheel").innerHTML="<svg id='hi' style='height:100vh; width:100vw;'><circle id='hic' cx=50% cy=57.5% r="+(j/4.5)+"% fill=black stroke-width=3 />\
	<text id='hit' x="+(50-.07*j*(Math.sqrt(2200/x)))+"% y="+(57.5+.05*j*(Math.sqrt(1000/y)))+"% font-family=Verdana font-size="+(.2*j)+"vh fill=white >Hi!</text></svg>";
	j--;
	window.scrollTo(0,0);
	}
	else { if (j<=90){document.getElementById("hiwheel").innerHTML="<svg id='hi' style='height:100vh; width:100vw; opacity:"+(.01*(j+10))+"'><circle id='hic' cx=50% cy=57.5% r="+(90/4.5)+"% fill=#111 stroke-width=3 />\
		<text id='hit' x="+(50-.07*90*(Math.sqrt(2200/x)))+"% y="+(57.5+.05*90*(Math.sqrt(1000/y)))+"% font-family=Verdana font-size="+(.2*90)+"vh fill=white >Hi!</text></svg>";
		j--;
		window.scrollTo(0,0);
	}
		else{ 
			return;
		}
	}
}
var j=501;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function hiWheel(){
	if(y>725 && x>1000){ mySound = new sound("save.wav");
	 document.getElementById("hiwheel").innerHTML="<svg id='hi' style='height:100vh; width:100vw;'><circle id='hic' cx=50% cy=57.5% r=0% fill=#111 stroke-width=3 /></svg>";
	timeoutLoop(function() {removeWheel(); },
            502,
            .01);
	scrolls();}
	else noHi();
}

function noHi(){ document.getElementById("section").style.visibility="visible";
		document.getElementById("topsec").style.zIndex="1";
		document.getElementById("hiwheel").remove();
	}

function noHia(){ document.getElementById("section").style.visibility="visible";
		document.getElementById("topsec").style.zIndex="1";
		document.getElementById("hiwheel").remove();
		scrolls();
	}

function timeoutLoop(fn, reps, delay) {
  if (reps > 0)
    setTimeout(function() {
                 fn();
                 timeoutLoop(fn, reps-1, delay);
               }, delay);
}

function shakea(){
	document.getElementById("ia").className="shake  animated"
}

function stopShakea(){
	document.getElementById("ia").className=""
}


function shakeb(){
	document.getElementById("ib").className="shake animated"
}

function stopShakeb(){
	document.getElementById("ib").className=""
}


function shakec(){
	document.getElementById("ic").className="shake animated"
}

function stopShakec(){
	document.getElementById("ic").className=""
}

function shaked(){
	document.getElementById("id").className="shake animated"
}

function stopShaked(){
	document.getElementById("id").className=""
}

function myModal(){

	document.getElementById("modalcont").innerHTML="<div id='modalbg'></div><div id='modalbox'><div id='modalh'>Type Below..</div><div id='cont'><form action='comment.php' method='post'><span id='formtextn'>Name:</span><input id='modalname' name='name' placeholder='Name' >\
	<span id='formtextc'>Comment:</span><textarea name='text' id='modalcomnt' placeholder='...'></textarea><input id='ok' type='submit' value='Send'></form><button id='no' onclick='removeModal();'>Cancel</button></div></div>";
}

function removeModal(){
	document.getElementById("modalbg").remove();
	document.getElementById("modalbox").remove();
}