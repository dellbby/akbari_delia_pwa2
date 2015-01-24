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

(function($){

	
/*----------------------login--------------------------------------------------*/
$('#signinButton').click(function(){
	var user = $('#user').val();	
	var pass = $('#pass').val();
	console.log("password works");
	$.ajax({
		url:'xhr/login.php',
		type: 'post',
		dataType: 'json',
		data:{
			username: user,
			password: pass
		},
		success:function(response){
			console.log("test user");
			if (response.error){
		}else{
			window.location.assign('admin.html')
		};
	}
});

});





/*----logout-----*/








/*----register-----*/







})(jQuery);

