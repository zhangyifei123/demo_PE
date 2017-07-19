//底部赞
$('.Praise').click(function(){
	$('.Praise>img').attr("src","../images/btn_feedPraised_s.png");
	$('.Praise>span').html(parseInt($('.Praise>span').text()+'&nbsp;')+1);
})
//底部转发
	$('.Forwarding').click(function(){
		$(".Forwarding_table").slideDown();
	})
	$(".Cancel_td").click(function(){
		$(".Forwarding_table").slideUp();
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