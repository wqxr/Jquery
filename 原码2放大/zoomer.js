;(function(w,d,u,$){
	$.fn.Zoomer=function(params){
		var defaults={
			speedView:200,
			speedRemove:400,
			speedText:300,
			altText:true
			};
			params=$({},defaults,params);
			var width1=$(this).find("img").width();
			var height1=$(this).find("img").height()
			$(this).hover(function(){
				
				$(this).find("img").css("z-index",100);
				$(this).find("img").stop(true,false).animate({
					top:'-50%',
					left:'-50%',
					width:'200px',
					height:'200px'
					
					},defaults.speedView);
					if(defaults.altText){
						
						var altText=$(this).find("img").attr("alt");
						$(this).prepend("<span class='title'>"+altText+"</span>");
						$('.title').animate({
							marginLeft:'-50px',
							marginTop:'100px'
							
							},defaults.speedText).css({'z-index':101,'position':'absolute'});
						}
				},function(){
					$(this).find("img").css("z-index",0);
					$(this).find("img").stop(true,false).animate({
					top:'0',
					left:'0',
					width:width1,
					height:height1
					
					},defaults.speedRemove);
					$(this).find(".title").remove();
				
				
		});
	}
	
})(window,document,undefined,$)