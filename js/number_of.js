var mySwiper = new Swiper('.swiper-container',{
    onSlideChangeEnd: function(swiper){

      $('.segment').removeClass('seg_highlight');
      $($('.segment')[swiper.activeIndex]).addClass('seg_highlight')
    }
})
function gotoIndex(ele,index){
    $('.segment').removeClass('seg_highlight');
    $(ele).addClass('seg_highlight');
    mySwiper.slideTo(index, 500, false);//切换到第一个slide，速度为1秒
}


$.ajax({
    url:"../data/getUsers.php?type=reces",
    type:"get",
    success:function(data){
        var obj = JSON.parse(data).data[1];
        console.log(obj);

        var div = $('<div class = "head_portrait_div"></div>');
        var div1 = $('<div class = "two_span"></div>');
        var div2 = $('<div class = "attention_div"></div>');
        var img = $('<img src="" class = "head_portrait img-circle" />');
        var img1 = $('<img src="" class = "attention" />');
        var span1 = $('<span class = "username"></span>');
        var span2 = $('<span class = "signature"></span>');

        div.append(img);
        div1.append(span1);
        div1.append(span2);
        div2.append(img1);
        $('.recommended').append(div);
        $('.recommended').append(div1);
        $('.recommended').append(div2);

        img.attr("src",obj.avatar);
        span1.text(obj.username);
        span2.text(obj.signature);
        img1.attr("src","../images/followUserBtn@2x.png");
    }
})

$.ajax({
    url:"../data/getUsers.php?type=like",
    type:"get",
    success:function(data){
        var obj1 = JSON.parse(data).data;
        console.log(obj1);
        for (var i = 0; i < obj1.length; i++) {
            var div = $('<div class = "head_portrait_div"></div>');
            var div1 = $('<div class = "two_span"></div>');
            var div2 = $('<div class = "attention_div"></div>');
            var div3 = $('<div class = "all_div"></div>');
            var img = $('<img src="" class = "head_portrait img-circle" />');
            var img1 = $('<img src="" class = "attention" />');
            var span1 = $('<span class = "username"></span>');
            var span2 = $('<span class = "signature"></span>');

            div.append(img);
            div1.append(span1);
            div1.append(span2);
            div2.append(img1);
            div3.append(div);
            div3.append(div1);
            div3.append(div2);

            $('.praise').append(div3);

            img.attr("src",obj1[i].avatar);
            span1.text(obj1[i].username);
            span2.text(obj1[i].signature);
            img1.attr("src","../images/followUserBtn@2x.png");
            img1[0].addEventListener('touchstart',fun,false);
        };


    }
})
var isShow = false;
    function fun(event){
        switch(event.type){
            case 'touchstart':
                if(!isShow){
                    $(this).attr("src","../images/followedUserBtn@2x.png");
                    isShow = true;
                }else{
                    $(this).attr("src","../images/followUserBtn@2x.png");
                    isShow = false;
                }
            break;
        }
    }