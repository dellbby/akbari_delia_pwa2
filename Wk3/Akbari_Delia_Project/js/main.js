/*  
	Crystal's Candy
	Author: Delia Akbari
*/

(function($){  //MOVED FROM LINE 52  THIS NEEDS TO BE THE FIRST LINE
/*----------------------tooltip--------------------------------------------------*/

	$(".masterTooltip").hover(function(){
		//Hover over code
		var title = $(this).attr("title");
		$(this).data("tipText", title).removeAttr("title");
		$("<p class='tooltip'></p>")
		.text(title)
		.appendTo("body")
		.fadeIn("slow");
	}, function(){
		//Hover out code
		$(this).attr("title", $(this).data("tiptText"));
		$(".tooltip").remove();
	}).mousemove(function(e){
		var mousex = e.pageX + 20; //Get X coordinates
		var mousey = e.pageY + 10; //Get Y coordinates
		$(".tooltip")
			.css({top: mousey, left: mousex});
	});
/*----------------------Modal--------------------------------------------------*/

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


$('.mystatus') .mouseover(function(){   //HAVE AN . AFTER MYSTATUS
	$(this).fadeTo(100, 1);
});





	
/*----------------------login--------------------------------------------------*/
	$(".signInButton").click(function(){
		var user = $("#user").val();
		var pass = $("#pass").val();
		console.log("This notifies you if the password is working");
		$.ajax({
			url:"xhr/login.php",
			type: "post",
			dataType: "json",
			data: {
				username: user,
				password: pass
			},
			success: function(response){
				console.log("Test User");
				if (response.error){
					alert(response.error);
				}else{
					window.location.assign("admin.html")
				};
			}
		});
	});

/*----logout-----*/
	$(".logOutButton").click(function(e){
		e.preventDefault;
		$.get("xhr/logout.php", function(){
			window.location.assign("index.html")
		})
	});







/*----register-----*/
	$("#register").on("click", function(){
		var firstname= $("#first").val(),
			lastname= $("#last").val(),
			username= $("#userName").val(),
			email= $("#email").val(),
			password= $("#password").val();
			console.log(firstname+" "+lastname+" "+username+" "+password);
			
		$.ajax({
			url: "xhr/register.php",
			type: "post",
			dataType: "json",
			data: {
				firstname: firstname,
				lastname: lastname,
				username: username,
				email: email,
				password: password
			},
			success: function(response){
				if (response.error){
					alert(response.error);
				}else{
					window.location.assign("index.html");
				}
			}
		});
	});

/*----username-----*/

	$.getJSON("xhr/check_login.php", function(data){
		console.log(data);
		$.each(data, function(key, val){
			console.log(val.first_name);
			$(".userid").html("Welcome User: "+ val.first_name);
		})
	});
	
	
	
	/*----New Project-----*/
	
	
		$("#addButton").on("click", function(){
		
		var projName = $("#projectName").val(),
			projDesc = $("#projectDescription").val(),
			projDue = $("projectDueDate").val(),
			status = $("input[name = 'status']:checked").prop("id");
			
			$.ajax({
				url: "xhr/new_project.php",
				type: "post",
				dataType: "json",
				data: {
					projectName: projName,
					projectDescription: projDesc,
					dueDate: projDue,
					status: status
				},
				success: function(response) {
					console.log("Testing for success");
					
					if(response.error) {
						alert(response.error);
					}else{
						window.location.assign("projects.html");
					};
				}
			});
	});
	
	
	/*----Get Projects-----*/
	
	
	
		var projects = function(){
		
		$.ajax({
			url: "xhr/get_projects.php",
			type: "get",
			dataType: "json",
			success: function(response){
				if(response.error){
					console.log(response.error);
				}else{
					
					for(var i=0, j=response.projects.length; i < j; i++){
						var result = response.projects[i];
						
						$(".projects").append(
							"<div style='border:1px solid black'>" +
							" <input class='projectid' type='hidden' value='" + result.id + "'>" +
							" Project Name: " + result.projectName + "<br>" +
							"Project Description: " + result.projectDescription + "<br>" +
							" Project Status: " + result.status + "<br>"
							+ "<button class='deletebtn'>Delete</button>"
							+ "<button class='editbtn'>Edit</button>"
							+ "</div> <br>"
						);
					};
					$(".deletebtn").on("click", function(e){
						console.log("test delete");
						$.ajax({
							url: "xhr/delete_project.php",
							data: {
								projectID: result.id
							},
							type: "POST",
							dataType: "json",
							success: function(response){
								console.log("Testing for success");
								
								if(response.error) {
									alert(response.error);
								}else{
									//console.log(result.id);
									window.location.assign("projects.html");
								};
							}
						});
					}); //End Delete
				}
			}
		})
	}
projects();

})(jQuery);
