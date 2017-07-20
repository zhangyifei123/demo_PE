$.ajax({
    url:"../data/data.php?type=list_one",
    type:"get",
    success:function (data) {
        var obj = JSON.parse(data).data;
        console.log(obj);
        for(var i = 0; i < obj.length; i++){
            var div = $('<div></div>');
            var a = $('<a href="details_page_m.html"></a>');
            var img = $('<img src="" alt="" />');
            a.append(img);
            div.append(a);
            img.attr('src',obj[i].avatar);
            $('.section_text_box_one').append(div);
        }
    }
});
var mySwiper = new Swiper ('.swiper-container', {
    onSlideChangeEnd:function(swiper){
        $('.segment').removeClass('seg_high');
        $($('.segment')[swiper.activeIndex]).addClass('seg_high');
    }
});
function gotoindex(ele,index){
    $('.segment').removeClass('seg_high');
    $(ele).addClass('seg_high');
    mySwiper.slideTo(index,500,false);
}  
for(var i = 0; i < 11; i++){
    var li = $('<li></li>');
    var a = $('<a href="personalHomepage.html"></a>');
    var div = $('<div></div>');
    var img = $('<img src="" alt="" />');
    var p = $('<p></p>');
    var span = $('<span></span>');
    img.attr("src","http://source.hotbody.cn/Fj_CspmoDHnXgJFkoICBKMLIYlBG");
    span.text("菲儿贝贝");
    p.text('汗水和肉总有一个在身上，加油!');
    div.append(img);
    div.append(span);
    div.append(p);
    a.append(div);
    li.append(a);
    
    var div1 = $('<div></div>');
    var p1 = $('<p class="border"></p>');
    var img1 = $('<img src="" alt="" />');
    var span1 = $('<span></span>');
    img1.attr("src","../images/icon_finish_lesson_feeling_n_3.png");
    span1.text("计划第4天，完成维密女神——腿部塑形入门");
    p1.append(img1);
    p1.append(span1);
    div1.append(p1);
    li.append(div1);
    var div2 = $('<div class="hot_pe"></div>');
    var div3 = $('<div class="hot_pe"></div>');
    var div4 = $('<div class="hot_pe"></div>');
    var p2 = $('<p></p>');
    var span2 = $('<span></span>');
    var p3 = $('<p></p>');
    var span3 = $('<span></span>');
    var p4 = $('<p></p>');
    var span4 = $('<span></span>');
    var div5 = $('<div class="hot"></div>');
    p2.text(6);
    span2.text("动作/组");
    p3.text(7);
    span3.text("本次训练/分钟");
    p4.text(33);
    span4.text("本次燃脂/千卡");
    div2.append(p2);
    div2.append(span2);
    div3.append(p3);
    div3.append(span3);
    div4.append(p4);
    div4.append(span4);
    div5.append(div2);
    div5.append(div3);
    div5.append(div4);
    li.append(div5);
    var p5 = $('<p></p>');
    var div6 = $('<div class="hot_hub"></div>');
    p5.text("打卡第1天");
    div6.append(p5);
    li.append(div6);
    var p6 = $('<p></p>');
    var span5 = $('<span></span>');
    var span6 = $('<span></span>');
    var span7 = $('<span class="last_border"></span>');
    var img6 = $('<img src="" alt="" />');
    var img7 = $('<img src="" alt="" />');
    var img8 = $('<img src="" alt="" />');
    var span8 = $('<span></span>');
    var span9 = $('<span></span>');
    var span10 = $('<span></span>');
    span5.append(img6);
    span5.append(span8);
    span6.append(img7);
    span6.append(span9);
    span7.append(img8);
    span7.append(span10);
    p6.append(span5);
    p6.append(span6);
    p6.append(span7);
    li.append(p6);
    img6.attr('src',"../images/btn_zanComment_n.png");
    span8.text(7);
    img7.attr('src',"../images/btn_replyFeed_n.png");
    span9.text("评论");
    img8.attr('src',"../images/btn_shareFeed_h.png");
    span10.text("分享");
    $(".section_content").append(li); 
    img6[0].addEventListener('touchstart',fun,false);
}
var isShow = false;
function fun(event){
    switch(event.type){
        case 'touchstart':      
            if(!isShow){
                $(this).attr("src","../images/btn_zanComment_s.png");
                this.nextElementSibling.textContent =parseInt(this.nextElementSibling.textContent) + 1;
                isShow = true;
            }else{
                $(this).attr("src","../images/btn_zanComment_n.png");
                this.nextElementSibling.textContent =parseInt(this.nextElementSibling.textContent) - 1;
                isShow = false;
            }
        break;
    }
}