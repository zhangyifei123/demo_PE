$.ajax({
    url:"../data/getUsers.php?type=getDetail",
    type:"get",
    success:function(data) {
        var obj = JSON.parse(data).user;
        var obj1 = JSON.parse(data);
        var obj2 = JSON.parse(data).feed.meta;
        // console.log(obj2);

        var div1 = $('<div class = "head_portrait_details"></div>');
        var a = $('<a href=""></a>');
        var div2 = $('<div class = "two_span"></div>')
        var img1 = $('<img src="" class = "img-circle"/>');
        var span1 = $('<span class = "username"></span>');
        var span2 = $('<span class = "dates">07/19 14:14</span>');
        var div3 = $('<div class = "with_focus_on_div"></div>');
        var img2 = $('<img src="" class = "with_focus_on" />');

        a.append(img1);
        div2.append(span1);
        div2.append(span2);
        div3.append(img2);
        div1.append(a);
        div1.append(div2);
        div1.append(div3);
        $(".head_portrait").append(div1);
        img1.attr("src",obj.avatar);
        span1.text(obj.username);
        img2.attr("src","../images/followUserBtn@2x.png");

        var image_div = $('<div class = "image_show"></div>');
        var imgs_picture = $('<img src = "" />');

        image_div.append(imgs_picture);
        $('.picture').append(image_div);
        imgs_picture.attr("src",obj1.feed.meta.image);

        var hot = $('<div class = "hot_show"></div>');
        $('.picture').append(hot);
        hot.html(obj2.text);

        var span = $('<span></span>');
        $('.plan').append(span);
        span.html(obj2.url);
    }
})

    var isShow2 = false;
    $('.with_focus_on').click(function(){
        $('.with_focus_on').attr("src","../images/followedUserBtnHigh@2x.png");
        console.log(13);
    });

$.ajax({
    url:"../data/getUsers.php?type=comment",
    type:"get",
    success:function(data){
        var str = JSON.parse(data);
        console.log(str);
        for (var i = 0; i < str.length; i++) {
            var diva = $('<div class = "head_portrait"></div>');
            var divb = $('<div class = "head_portrait_details"></div>');
            var divd = $('<div class = "head_portrait_details_div"></div>');
            var divc = $('<div class = "two_span"></div>')
            var imga = $('<img src="" class = "img-circle"/>');
            var spana = $('<span class = "username"></span>');
            var spanb = $('<span class = "time">05/28 11:50</span>');
            var imgb = $('<img src="" class = "with_focus_on1" onclick = "fun1(this)" />');
            var dive = $('<div class = "img_zan"></div>');

            divd.append(imga);
            divc.append(spana);
            divc.append(spanb);
            divb.append(divd);
            divb.append(divc);
            divb.append(dive);
            dive.append(imgb);
            diva.append(divb);
            $(".comments_details_div").append(diva);
            imga.attr("src",str[i].avatar);
            spana.text(str[i].username);
            spanb.text(str[i].desc);
            imgb.attr("src","../images/btn_feedDetailPraised_n@2x.png");

            var divf = $('<div class = "review"></div>');
            var spanc = $('<span class = "review_span"></span>');
            divf.append(spanc);
            $(".comments_details_div").append(divf);
            spanc.text(str[i].text);
        };
    }
})
var isShow = false;
$(".stars_img").click(function(){
    if(!isShow){
        $(".stars_img").attr("src","../images/btn_forumCollection_s@2x.png");
        isShow = true;
    }else{
        $(".stars_img").attr("src","../images/btn_forumCollection_n@2x.png");
        isShow = false;
    }
})

var isShow1 = false;
function fun1(ele){
    if (!isShow1) {
        ele.setAttribute("src","../images/btn_feedDetailPraised_s@2x.png");
        isShow1 = true;
    }else{
        ele.setAttribute("src","../images/btn_feedDetailPraised_n@2x.png");
        isShow1 = false;
    };

}
$.ajax({
    url:"../data/getUsers.php?type=recommends",
    type:"get",
    success:function(data){
        var strs = JSON.parse(data).data;
        console.log(strs);
        for (var i = 0; i < strs.length; i++) {
            var photo_div = $('<div class = "photo_div"></div>');

            var photo_div1 = $('<div class = "photo_div1"></div>');
            var photo_diva = $('<div class = "photo_diva"></div>');
            var photo_divb = $('<div class = "photo_divb"></div>');
            var photo_divc = $('<div class = "photo_divc"></div>');
            var a1 = $('<a href = "personalHomepage.html"></a>');
            var img1 = $('<img src="" class = "img-circle img1"  />');
            var img2 = $('<img src="" class = "img2"  />');
            var span1 = $('<span class = "span1"></span>');
            var span2 = $('<span class = "span2">07/16 21:21</span>');

            photo_diva.append(img1);
            photo_divb.append(span1);
            photo_divb.append(span2);
            photo_divc.append(img2);
            a1.append(photo_diva);
            photo_div1.append(a1);
            photo_div1.append(photo_divb);
            photo_div1.append(photo_divc);
            photo_div.append(photo_div1);
            img1.attr("src",strs[i].avatar);
            span1.text(strs[i].username);
            img2.attr("src","../images/btn_feedDetailPraised_n@2x.png");

            var photo_div2 = $('<div class = "photo_div2"></div>');
            var img3 = $('<img src="" class = "img3"  />');
            var a = $('<a href = "details_page_m.js"></a>');
            a.append(img3);
            photo_div2.append(a);
            photo_div.append(photo_div2);
            $('.second_hotspot').append(photo_div);
            img3.attr("src",strs[i].image);
        };
    }
})