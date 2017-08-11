$(document).ready(function(){
	$("#post").on('click', function(event){
		event.preventDefault();
		var content= $("#contenidotweet").val()
		var new_post = 
		'<div class="row myboxrow">'
			+'<div class="col-xs-12 col-sm-offset-4 col-sm-6 col-md-offset-4 col-md-6 col-lg-offset-3 col-lg-6 myboxcol" >'
				+'<div class="row">'
					+'<img class="img-circle img responsive" src="images/laura.png" alt="foto_jason">'
					+'<h2 class="myboxh2"> <strong style="color:black">Laura Loisi Z.</strong> @jasonsepulvedas <span> - 11 ago.</span></h2>'
						+'<span class="glyphicon glyphicon-remove myboxspan" id="cerrar"> </span>'
				+'</div>'
				+'<div class="row">'
					+content
				+'</div>'
				+'<div class="row myboxrow2">'
					+'<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 bloque1">'
						+'<p><span class="glyphicon glyphicon-comment"> 7 </span></p>'
					+'</div>'
					+'<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 bloque2">'
						+'<p><span class="glyphicon glyphicon-retweet"> 4 </span></p>'
					+'</div>'
					+'<div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 bloque3">'
						+'<p><span class="glyphicon glyphicon-heart likeable"> 1 </span></p>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>';

		$("#tweetss").append(new_post);


	});
		$("#board").on('click','#cerrar',function(){
			$(this).parent().parent().parent().fadeOut();
		})

		$("#board").on('click','.likeable',function(){
			$(this).html(parseInt($(this).html())+1)
			$(this).css("color","red")
		})
		$("#board").on('input')
})