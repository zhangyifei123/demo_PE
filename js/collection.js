$.ajax({
    url:"../data/data.php?type=feeds_timeline",
    type:"get",
    success: function (data){
        var banners = JSON.parse(data);
        var obj = banners.feeds;
        console.log(obj);
        for(var i = 0; i < obj.length; i++){
            var div2 = $("<div class='middle_box_box'></div>");
            // var div = $("<div class='middle_box_head'></div>");
            var a = $("<a href='personalHomepage.html'></a>");
            // var img = $("<img src='' alt='' />");
            // var p = $("<p></p>");
            // a.prepend(img);
            // a.append(p);
            // div.prepend(a);

            // img.attr("src","../images/remind_tuijian_nor@2x.png");
            // p.text("由" +banners.feeds[i].recommend_from+ "推荐");

            var div1 = $("<div class='middle_box_section_div'></div>");
            var a1 = $("<a href='project.html'></a>");
            var img1 = $("<img src='' alt='' />");
            var p1 = $("<p class='name'></p>");
            // var img2 = $("<img src='' alt='' />");
            a1.prepend(img1);
            a1.append(p1);
            div1.prepend(a1);
            // div1.append(img2);
            div2.prepend(div1);
            // div2.prepend(div);
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
            // img2.attr("src","../images/btn_addFollow_h@2x.png");
            var a2 = $("<a href='details_page_m.html'></a>");
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
            // img2[0].addEventListener('touchstart',fun,false);
            img4[0].addEventListener('touchstart',fun1,false);

        }
        var isShow = false;
        // function fun(event){
        //     switch(event.type){
        //         case 'touchstart':
        //             if(!isShow){
        //                 $(this).attr("src","../images/followedUserBtnHigh@2x.png");
        //                 isShow = true;
        //             }else{
        //                 $(this).attr("src","../images/btn_addFollow_h@2x.png");
        //                 isShow = false;
        //             }
        //             break;
        //     }
        // }
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