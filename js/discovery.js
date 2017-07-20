$.ajax({
    url:"../data/data.php?type=find",
    type:"get",
    success: function (data) {
    	var banner = JSON.parse(data).data.banners.banners;
    	$(".banner_one").attr("src",banner[0].image);
    	$(".banner_two").attr("src",banner[1].image);
    	$(".banner_three").attr("src",banner[2].image);
    	$(".banner_four").attr("src",banner[3].image);
    	
    	var share = JSON.parse(data).data.star_storys;
    	$(".share_one img").attr("src",share[0].image);
    	$(".share_two img").attr("src",share[1].image);
    	$(".share_three img").attr("src",share[2].image);
    	$(".share_four img").attr("src",share[3].image);
    	$(".share_five img").attr("src",share[4].image);
    	$(".share_six img").attr("src",share[5].image);

    	$(".share_one p").text(share[0].text);
    	$(".share_two p").text(share[1].text);
    	$(".share_three p").text(share[2].text);
    	$(".share_four p").text(share[3].text);
    	$(".share_five p").text(share[4].text);
    	$(".share_six p").text(share[5].text);

    	var banner1 = JSON.parse(data).data.banners.sub_banners;
    	$(".section_content_one").attr("src",banner1[0].image);
    	$(".section_content_two").attr("src",banner1[1].image);
    	$(".section_content_three").attr("src",banner1[2].image);
    	$(".section_content_four").attr("src",banner1[3].image);
    }
});
var Swiper = new Swiper('.swiper-container',{
	pagination:".swiper-pagination",
	paginationType:"custom",
	autoplay: 3000,
	autoplayDisableOnInteraction : false,
	paginationCustomRender:function(swiper,current,total) {
		
		var lis = document.querySelectorAll(".point_box  li");
		for(var i = 0; i < lis.length; i++){
			lis[i].className = '';
		}
		lis[current - 1].className = "point_box_1";
	},
	spaceBetween:0,
	loop : true
})
$.ajax({
    url:"../data/data.php?type=hot",
    type:"get",
    success: function (data) {
    	var sift = JSON.parse(data).feeds;
    	for(var i = 0; i < sift.length; i++){
    		var li = $("<li class='li'></li>");
    		var a = $("<a href='personalHomepage.html'></a>");
    		var p = $("<p class='p'></p>");
    		var img = $("<img src='' alt='' class='img' />");
    		var span = $("<span class='span'></span>");
    		var a1 = $("<a href=''></a>");
    		var img1 = $("<img src='' alt='' class='sift_box_img' />");
    		var p1 = $("<p class='p1'></p>");
    		var div = $("<div></div>");
    		var img2 = $("<img src='' alt='' />");
    		var span1 = $("<span></span>");
    		var img3 = $("<img src='' alt='' />");
    		var span2 = $("<span></span>");
    		var a2 = $("<a href='details_page_m.html'></a>");
    		img1.attr("src",sift[i].meta.image);
    		p1.text(sift[i].meta.text);
    		div.prepend(img2);
    		div.append(span1);
    		a2.append(img3);
    		div.append(a2);
    		div.append(span2);
    		p.prepend(img);
    		p.append(span);
			a.prepend(p);
    		li.prepend(a);
    		li.append(a1);
    		li.append(div);
    		a1.append(img1);
    		a1.append(p1);
    		$(".sift_box").prepend(li);

    		var str = JSON.parse(data).feeds[i].related_uid;
 			var sift1 = JSON.parse(data).users[str];
 			img.attr("src",sift1.avatar);
 			span.text(sift1.username);
 			img2.attr("src","../images/btn_zanComment_n@2x.png");
 			span1.text(3);
 			img3.attr("src","../images/btn_replyDetail_h@2x.png");
 			span2.text(7);
 			img2[0].addEventListener('touchstart',fun,false);
    	}
    	var isShow = false;
    	function fun(event){
            switch(event.type){
                case 'touchstart':
                    
                    if(!isShow){
                    	$(this).attr("src","../images/btn_zanComment_s@2x.png");
                    	this.nextElementSibling.textContent =parseInt(this.nextElementSibling.textContent) + 1;
                    	isShow = true;
                    }else{
                    	$(this).attr("src","../images/btn_zanComment_n@2x.png");
                    	this.nextElementSibling.textContent =parseInt(this.nextElementSibling.textContent) - 1;
                    	isShow = false;
                    }
                    break;
            }
        }
        $(".sift_box_big a img").attr("src",sift[6].meta.image);
        $(".sift_box_big_two a img").attr("src",sift[15].meta.image);
    }
});