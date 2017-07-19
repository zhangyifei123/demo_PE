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
    		var a1 = $("<a href='details_page_m.html'></a>");
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