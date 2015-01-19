/*  
	Your Project Title
	Author: You
*/
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
