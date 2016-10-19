var bgobj = $(".background-parallax");

$(document).ready(function(){

	var pos = parseInt($(this).scrollTop());
	bgobj.each(function(){
            var yPos = -(pos/$(this).data('speed'))+parseInt($(this).data('diff'));
            var coords = '50% '+ yPos + 'px';
            $(this).css({backgroundPosition: coords});
        });
});

$(window).scroll(function(){
    var pos = parseInt($(this).scrollTop());
    
    bgobj.each(function(){
        var yPos = -(pos/$(this).data('speed'))+parseInt($(this).data('diff'));
        var coords = '50% '+ yPos + 'px';
        $(this).css({backgroundPosition: coords});
    });
});


//Load jSON
$.ajax({
  	dataType: "json",
  	url: 'data.json',
	success: function(response){
		$.each( response, function( key, data ) {
			if(key=="intro"){
				$.each( data, function( k, val ) {
					
					if(k=="date"){
						document.getElementById("intro-date").innerHTML = val;
					}
					if(k=="title"){
						document.getElementById("intro-title").innerHTML = val;
					}
					
				});
			}
			
			if(key=="articles"){
				$.each( data, function( k, article ) {
					
					var img = "";
					var date = "";
					var type = "";
					var title = "";
					var text = "";
					$.each( article, function( label , desc ) {
						if(label=="img"){
							img = desc;
						}
						if(label=="date"){
							date = desc;
						}
						if(label=="type"){
							type = desc;
						}
						if(label=="title"){
							title = desc;
						}
						if(label=="text"){
							text = desc;
						}
					});
					var element = '<div class="article">'+
										'<div class="illustration">'+
											'<img src="'+img+'"/>'+
										'</div>'+
										'<div class="article-info">'+
											'<span>'+date+'</span>'+
											'<span>'+type+'</span>'+
										'</div>'+
										'<div class="article-text">'+
											'<h5>'+title+'</h5>'+
											'<p>'+text+'</p>'+
											'<a class="readmore" href="">LIRE PLUS</a>'+
										'</div>'+
									'</div>';
					$("#row6 .articles").append(element);
				});
			}
		    //items.push(val);
			//console.log(val);
		});
	}
});