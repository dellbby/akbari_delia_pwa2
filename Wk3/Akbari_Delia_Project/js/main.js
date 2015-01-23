/*  
	Your Project Title
	Author: You
*/

///Need to add the global document ready statment.  Also add the closing tag at the bottom.  




$('.masterTooltip').hover(function(){
	//Hover code
	var title = $(this).attr('title');
	$(this).data('tipText', title).removeAttr('title');
	$('<p class="tooltip"></p>')
	.text(title)
	.appendTo('body')
	.fadeIn('slow');
}, function() {
	//hover out
	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip').remove();
}).mousemove(function(e) {
	var mousex = e.pageX + 20; 
	var mousey = e.pageY + 10;
	$('.tooltip')
	.css({ top:mousey, left:mousex})
});


$('.modalClick') .on('click', function(event) {
	event.preventDefault();
	$('#overlay')
		.fadeIn()
		.find('#modal')
		.fadeIn();
});

$('.close') .on('click', function(event){
	event.preventDefault();
	$('#overlay')
	.fadeOut()
	.find('#modal')
	.fadeOut();
});


$('.mystatus.') .mouseover(function(){
	$(this).fadeTo(100, 1);
});


//No mouseout function - fade will only work on the over.




//No code for the accorion.  You can not use a plugin for this code.  You are only allowed to use plugins in week four.  If you update the code by the time the week 3 project is due, I will add points to this assignment.




///Add the closing tag for the global document ready statement. 