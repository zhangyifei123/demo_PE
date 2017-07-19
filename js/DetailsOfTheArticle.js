//底部赞
$('.Praise').click(function(){
	$('.Praise>img').attr("src","../images/btn_feedPraised_s.png");
	$('.Praise>span').html(parseInt($('.Praise>span').text()+'&nbsp;')+1);
})
//底部转发
	$('.Forwarding').click(function(){
		$(".Forwarding_table").show();
		$(".full_page").show();
	})
	$(".Cancel_td").click(function(){
		$(".Forwarding_table").hide();
		$(".full_page").hide();
	})
// 收藏
	var isShow = false;
	$(".Collection").click(function(){
		if (!isShow) {
			$('.Collection').attr('src',"../images/btn_forumCollection_s@2x.png");
				alert("收藏成功");
				    isShow = true;
		} else {
			$('.Collection').attr('src',"../images/btn_forumCollection_n@2x.png");
				alert("取消收藏");
			isShow = false;
		}
	})
//即时时间

		// var time = new Date();
		// var time1 = document.getElementById('time');
  //       var month = time.getMonth() + 1;
  //       var strDate = time.getDate();
  //       var mytime=time.toLocaleTimeString()
		// time1.textContent = month+"月"+strDate+"日"+mytime;
//点击关注
		var isShow = false;
		$(".attention").click(function(){
			if (!isShow) {
				$(".attention").html("&nbsp;&nbsp;√&nbsp;已关注&nbsp;&nbsp;");
				$(".attention").addClass('bgcolor');
				isShow = true;
			}else {
				
				$(".attention").removeClass('bgcolor');
				$(".attention").html("+关注");
				isShow = false;
			}
		})
//获取后台数据
		$.ajax({
			 url:"../data/data.php?type=plaza_video",
			 type:"get",
			 success:function(data){
			 		var data1 = JSON.parse(data).data;
			 		console.log(data1[0].image_list);
			 		// var video = ("<video src='data1[0].video' poster='data1[0].image_list' controls='' playsinline -webkit-playsinline class='video'></video>");
			 		// $('section>div').append(video);
			 		 var p_title= $("<p class='p_title'></p>");
           			 var p_content= $("<p class='p_content'></p>");
           			 p_title.text(data1[0].title);
           			 p_content.text(data1[0].description);
           			 $('section>div').append(p_title);
            		 $('section>div').append(p_content);


			 }


		})

//评论点赞专区
		var isshow = false;
		$(".div_zan1").click(function(){
			if (!isshow) {
			 $(".div_zan1>img").attr("src",'../images/btn_feedDetailPraised_s@2x.png');
				 isshow = true;
			} else {
				 $(".div_zan1>img").attr("src",'../images/btn_feedPraised_n@2x.png');
				 isshow = false;
			}
			
		})
		var isshow = false;
		$(".div_zan2").click(function(){
			if (!isshow) {
			 $(".div_zan2>img").attr("src",'../images/btn_feedDetailPraised_s@2x.png');
				 isshow = true;
			} else {
				 $(".div_zan2>img").attr("src",'../images/btn_feedPraised_n@2x.png');
				 isshow = false;
			}
			})
		var isshow = false;
		$(".div_zan3").click(function(){
			if (!isshow) {
			 $(".div_zan3>img").attr("src",'../images/btn_feedDetailPraised_s@2x.png');
				 isshow = true;
			} else {
				 $(".div_zan3>img").attr("src",'../images/btn_feedPraised_n@2x.png');
				 isshow = false;
			}
		})
//评论
	$(".div_nei,.content_PPP").click(function(){
		$(".ul_li_Cancel").slideDown();
		$(".full_page").show();
})
	$(".qx").click(function(){
		$(".ul_li_Cancel").slideUp();
		$(".full_page").hide();
})