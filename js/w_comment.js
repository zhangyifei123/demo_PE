	function send1() {
			var div0 = $("<div class='section_div0'><img src='../images/headPortrait.jpg' alt='' class='img-circle img_ha'/><span class='Tomorrow'>九五至尊</span><img onclick='fun1(this)' src='../images/btn_feedDetailPraised_n.png' alt='' class='Givethethumbsup'/><div class='section_div'></div></div><br/>");
			$("section").append(div0);
			$(".section_div").text($('#textarea_footer').val());
		}
		var isshow = false;
		function fun1(ele){
			if (!isshow) {
				ele.setAttribute("src","../images/btn_feedDetailPraised_s.png");
				isshow = true;	
			} else {
				ele.setAttribute("src","../images/../images/btn_feedDetailPraised_n.png");
				isshow = false;
			}
			
		}
		var isShow = false;
		$(".Givethethumbsup1").click(function(){
			if (!isShow) {
				$(".Givethethumbsup1").attr("src","../images/btn_feedDetailPraised_s.png");
				isShow = true;
			} else {
				$(".Givethethumbsup1").attr("src","../images/btn_feedDetailPraised_n.png");
				isShow = false;
			}
			
		})