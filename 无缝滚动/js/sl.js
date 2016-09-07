;$(function(){
	$.focus=function(id){
	//取出层的宽度
	var sWith=$(id).width();
	//取出li的个数-》生成数字按钮
	var len=$(id).find("ul li").length;
	//图片的索引
	var index=0;
	var picTimer;
	//添加数字按钮.
	var btn="<div class='btnBg'></div><div class='btn'>";
	for(var i=0;i<len;i++){
		var li=i+1;
		btn+="<span>"+li+"</span>";
		}
		btn+="</div><div class='preNext pre'></div><div class='preNext next'></div>";
		$(id).append(btn);
		$(id).find("div.preNext").css("opacity",0.3);
		$(id+" div.btn span").css("opacity",0.3).mouseenter(function(){
			index=$(id+" div.btn span").index(this);
			showPic(index)
			}).eq(0).css("opacity",1);
			
			//控制上下页，鼠标放上 移开时的外观
			$(id+" .preNext").hover(function(){
				$(this).stop(true,false).animate({"opacity":0.8},300);
			},function(){
				$(this).stop(true,false).animate({"opacity":0.3},300);
				});
			//控制上下页的点
			$(id+" .next").click(function(){
				index++;
				if(index==len){
					index=0;
					}
				showPic(index);
				})
			$(id+" .pre").click(function(){
				index--;
				if(index==-1){
					index=len-1;
					}
				showPic(index);
				})
				//控制定时器
			$(id).hover(function(){
				clearInterval(picTimer);
				},function(){
					picTimer=setInterval(function(){
						showPic(index);
						index++;
						if(index==len){
							index=0;
							}
						},1000)
					}).trigger("mouseout");
				//定义一个私有函数 showpic就能访问到sWith
			function showPic(index){
				var nowleft=-index*sWith;
				$(id+" ul").stop(true,false).animate({"left":nowleft},300);
				//数字按钮上改样式
				$(id+" .btn span").stop(true,false).animate({"opacity":0.4},300)
				.eq(index).stop(true,false).animate({"opacity":1},300);
				}
		};
	})