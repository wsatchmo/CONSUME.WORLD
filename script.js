document.getElementById('preloader').addEventListener('ended',myHandler,false);
function myHandler(e) {
	document.getElementById("preloader_container").style.display = "none";
}

// bg color timeout (in case it remains)
setTimeout(function(){
	$('#preload_bg').css('display', 'none');
}, 4000);

// Navbar sticky
var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
	console.log("Hello, I'm gay actor Michael Douglas, and the Navbar moved." 
		+	"It sucks, but it's sexy.")
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navgott").style.top = "0";
	} else {
		document.getElementById("navgott").style.top = "-60px";
	}
	prevScrollpos = currentScrollPos;
});

//NAV ANIM
$("#collapse-button").on('click', function(e) {
	console.log("Nav, mommy - thanks jeans!")
	e.preventDefault();
	$(".navbar-burger").toggleClass("is-active");
	$('#nav-collapsed').transition('slide down');
});

$('.ui.dropdown').dropdown();

// RESIZE FLICKER REDUCE
function resize(width, height) {
	//Create temp canvas and context
	var tempContext = Utils.Canvas.Create2DContext(context.canvas.width, context.canvas.height);
	//Draw current canvas to temp canvas
	tempContext.drawImage(context.canvas, 0, 0);
	//Resize current canvas
	context.canvas.height = height;
	context.canvas.width = width;
	//Draw temp canvas back to the current canvas
	context.drawImage(tempContext.canvas, 0, 0);
}

// SEMANTIC TRANSITIONS
setTimeout(function(){
	$('#card1')
		.transition('fade up')
	;
}, 1450);
// FADEINS
setTimeout(function(){
	$('#card2')
		.transition('fade up')
	;
}, 1950);
// FADEINS
setTimeout(function(){
	$('#card3')
		.transition('fade up')
	;
}, 2550);

//Starhover
function starHover(){
	$('#starpulse').transition('pulse');
};

// Year for footer
// document.getElementById("year").innerHTML = new Date().getFullYear();