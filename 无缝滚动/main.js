;(function(w,d,u,$){
	var x=10;
	var y=20;
	$.fn.linkWithPic=function(){
		$(this).hover(function(e){
			//title文字的获取
			
			var title=$(this).attr("title")?$(this).attr("title"):"&nbsp;";
			
			//$(this).attr("temp",title).removeAttr("title");
			//$(this).temp=($(this).temp?$(this).temp:"&nbsp;");
			//添加一个层
			$("body").append("<div id='screenshot'><img src='"+$(this).attr("rel")+"'/></div>");
			if($(this).attr("title")!="&nbsp"){
				$("#screenshot").append("<br />"+title);
				}else{
					$("#screenshot").append(title);
					}
			$(this).attr("temp",title).removeAttr("title");
			$("#screenshot").css({"top":e.pageY+y+"px","left":e.pageX+x+"px"}).fadeIn("slow");
			//加入图片，加入文字
			//取出鼠标的位置，加一个偏移
			//再设置层的位置
			},function(e){
				var title=$(this).attr("temp");
				$(this).attr("title",title).removeAttr("temp")
				$("#screenshot").remove();
				});
			$(this).mousemove(function(e){
				$("#screenshot").css({"top":e.pageY+y+"px","left":e.pageX+x+"px"}).show();
				})
		};
	
	})(window,document,undefined,$)