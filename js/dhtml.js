$.ajax({
    url:"../data/data.php?type=feeds_list",
    type:"get",
    success: function (data) {
    	var banner = JSON.parse(data).data;
        for(var i = 0; i < banner.length; i++){
            var li = $("<li></li>");
            var div = $("<div></div>");
            var img = $("<img src='' alt='' />");
            var p = $("<p></p>");
            var a = $("<a href='personalHomepage.html'></a>");
            var img1 = $("<img src='' alt='' class='getting' />");
            var img2 = $("<img src='' alt='' />");
            var a1 = $("<a href='details_page_m.html'></a>");
            a.prepend(img);
            a.append(p);
            div.prepend(a);
            div.append(img1);
            li.prepend(div);
            a1.append(img2);
            li.append(a1);
            $(".top_box_section_box").append(li);

            img.attr("src",banner[i].avatar);
            p.text(banner[i].username);
            img1.attr("src","../images/btn_zanComment_n@2x.png");
            img2.attr("src",banner[i].image);
            img1[0].addEventListener('touchstart',fun,false);
        }
        var isShow = false;
        function fun(event){
            switch(event.type){
                case 'touchstart':
                    if(!isShow){
                        $(this).attr("src","../images/btn_zanComment_s@2x.png");
                        isShow = true;
                    }else{
                        $(this).attr("src","../images/btn_zanComment_n@2x.png");
                        isShow = false;
                    }
                    break;
            }
        }
    }
});

$.ajax({
    url:"../data/data.php?type=feeds_timeline",
    type:"get",
    success: function (data){
        var banners = JSON.parse(data);
        for(var i = 5; i < 7; i++){
            var div2 = $("<div class='middle_box_box'></div>");
            var div = $("<div class='middle_box_head'></div>");
            var a = $("<a href='personalHomepage.html'></a>");
            var img = $("<img src='' alt='' />");
            var p = $("<p></p>");
            a.prepend(img);
            a.append(p);
            div.prepend(a);

            img.attr("src","../images/remind_tuijian_nor@2x.png");
            p.text("由" +banners.feeds[i].recommend_from+ "推荐");

            var div1 = $("<div class='middle_box_section_div'></div>");
            var a1 = $("<a href='project.html'></a>");
            var img1 = $("<img src='' alt='' />");
            var p1 = $("<p class='name'></p>");
            var img2 = $("<img src='' alt='' />");
            a1.prepend(img1);
            a1.append(p1);
            div1.prepend(a1);
            div1.append(img2);
            div2.prepend(div1);
            div2.prepend(div);
            var p2 = $("<p class='text_big'></p>");
            var p3 = $("<p class='text'></p>");
            var div3 = $("<div class='foot_img_box'></div>");
            var p4 = $("<p></p>");
            var p5 = $("<p></p>");
            var p6 = $("<p class='flex_right'></p>");
            var img4 = $("<img src='' alt='' />");
            var img5 = $("<img src='' alt='' />");
            var img6 = $("<img src='' alt='' />");
            var span = $("<span></span>");
            var span1 = $("<span></span>");
            var span2 = $("<span></span>");
            var a3 = $("<a href='project.html'></a>");
            var a4 = $("<a href='project.html'></a>");
            p4.prepend(img4);
            p4.append(span);
            a3.prepend(img5);
            a3.append(span1);
            p5.append(a3);
            a4.prepend(img6);
            a4.append(span2);
            p6.append(a4);
            div3.prepend(p4);
            div3.append(p5);
            div3.append(p6);

            var str = JSON.parse(data).feeds[i].related_uid;
            var bannerss = JSON.parse(data).users[str];
            img1.attr("src",bannerss.avatar);
            p1.text(bannerss.username);
            img2.attr("src","../images/btn_addFollow_h@2x.png");
            var a2 = $("<a href=''></a>");
            var img3 = $("<img src='' alt='' />");
            a2.append(img3);
            a2.append(p2);
            a2.append(p3);
            div2.append(a2);
            div2.append(div3);
            $(".middle_box").append(div2);
            img3.attr("src",banners.feeds[i].meta.image);
            p2.text(banners.feeds[i].meta.title);
            p3.text(bannerss.verify);
            img4.attr("src","../images/btn_zanComment_n@2x.png");
            span.text(banners.feeds[i].like_count);
            img5.attr("src","../images/btn_replyDetail_h@2x.png");
            span1.text(banners.feeds[i].comment_count);
            img6.attr("src","../images/btn_shareFeed_n@2x.png");
            span2.text(banners.feeds[i].share_count);
            img2[0].addEventListener('touchstart',fun,false);
            img4[0].addEventListener('touchstart',fun1,false);

        }
        var isShow = false;
        function fun(event){
            switch(event.type){
                case 'touchstart':
                    if(!isShow){
                        $(this).attr("src","../images/followedUserBtnHigh@2x.png");
                        isShow = true;
                    }else{
                        $(this).attr("src","../images/btn_addFollow_h@2x.png");
                        isShow = false;
                    }
                    break;
            }
        }
        function fun1(event){
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
    }
});



$.ajax({
    url:"../data/data.php?type=feeduser",
    type:"get",
    success: function (data) {
        var obj = JSON.parse(data).data;
        for(var i = 0; i < obj.length; i++){
            var li = $("<li></li>");
            var div = $("<div class='bottom_box_section_head'></div>");
            var a = $("<a href='personalHomepage.html'></a>");
            var img = $("<img src='' alt='' />");
            var span = $("<span></span>");
            var img1 = $("<img src='' alt='' />");
            a.prepend(img);
            a.append(span);
            div.prepend(a);
            div.append(img1);
            li.prepend(div);
            img.attr("src",obj[i].avatar);
            span.text(obj[i].username);
            img1.attr("src","../images/btn_close_n@3.png");
            var div1 = $("<div class='bottom_box_section_head_2'></div>");
            var span1 = $("<span></span>"); 
            var span2 = $("<span></span>"); 
            var span3 = $("<span></span>"); 
            var p1 = $("<p></p>");
            var p2 = $("<p></p>");
            var p3 = $("<p></p>");
            p1.text('训练分钟数');
            p2.text('粉丝');
            p3.text('精选');
            span1.text(obj[i].duration_count);
            span2.text(obj[i].follower_count);
            span3.text(obj[i].selected_count);
            var div2 = $("<div class='left'></div>");
            var div3 = $("<div></div>");
            var div4 = $("<div></div>");
            div2.append(span1);
            div2.append(p1);
            div3.append(span2);
            div3.append(p2);
            div4.append(span3);
            div4.append(p3);
            div1.append(div2);
            div1.append(div3);
            div1.append(div4);
            li.append(div1);
            var div5 = $("<div class='bottom_box_section_head_3'></div>");
            var a1 = $("<a href='details_page_m.html'></a>");
            var a2 = $("<a href='details_page_m.html'></a>");
            var a3 = $("<a href='details_page_m.html'></a>");
            var img2 = $("<img src='' alt='' />"); 
            var img3 = $("<img src='' alt='' />"); 
            var img4 = $("<img src='' alt='' />"); 
            a1.append(img2);
            a2.append(img3);
            a3.append(img4);
            div5.append(a1);
            div5.append(a2);
            div5.append(a3);
            li.append(div5);
            img2.attr("src",obj[i].selected_stories[0].image);
            img3.attr("src",obj[i].selected_stories[1].image);
            img4.attr("src",obj[i].selected_stories[2].image);
            var img5 = $("<img src='' alt='' />");
            var div6 = $("<div class='bottom_box_section_head_4'></div>");
            div6.append(img5);
            li.append(div6);
            img5.attr("src","../images/btn_addFollow_h@2x.png");
            $(".bottom_box_section_box").append(li);
            img5[0].addEventListener('touchstart',fun,false);
        }
        var isShow = false;
        function fun(event){
            switch(event.type){
                case 'touchstart':
                    if(!isShow){
                        $(this).attr("src","../images/followedUserBtnHigh@2x.png");
                        isShow = true;
                    }else{
                        $(this).attr("src","../images/btn_addFollow_h@2x.png");
                        isShow = false;
                    }
                    break;
            }
        }
    }   
});
