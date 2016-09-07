$(document).ready(function() {
    $("ul#filter li a").click(function(){
		
		var text=$(this).text().toLowerCase().replace(" ","-");
		$(this).parent().siblings().removeClass("current");
		$(this).parent().addClass("current");
		if(text=='all'){
			$("#portfolio li").fadeIn("slow");
			
			}else{
				$("#portfolio li").each(function(index,element){
					if($(element).hasClass(text)){
						$(element).fadeIn("slow");
						}else{
							$(element).fadeOut("slow");
							}
			
					
					});
			}
		});
});