document.getElementById('preloader').addEventListener('ended',myHandler,false);
function myHandler(e) {
	document.getElementById("preloader_container").style.display = "none";
}

//NAV ANIM
$("#collapse-button").on('click', function(e) {
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

function starHover(){
	$('#starpulse').transition('pulse');
};

// Year for footer
document.getElementById("year").innerHTML = new Date().getFullYear();