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
var flag = false;
if (!false) {
   loadData(); 
   flag = true;
}

function loadData(){
    $.ajax({
    url:"../data/data.php?type=list_one",
    type:"get",
    success:function (data) {
        var obj = JSON.parse(data).data;
        for(var i = 0; i < 3; i++){
            $($('.head_img')[i]).attr("src",obj[i].avatar);
            $($('.name')[i]).text(obj[i].username);
            $($('.number')[i]).text(obj[i].is_liked);
            
        }
        for(var i = 3; i < obj.length; i++){
            var div = $("<div></div>");
            var span3 = $("<span class='NO_num'></span>");
            var a = $('<a href="personalHomepage.html" class="all_red"></a>');
            var p =$('<p></p>');
            var img = $('<img src="" alt="" class="head_img" />');
            var span = $('<span class="name"></span>');
            var span1 = $('<span class="number"></span>');
            var span2 = $('<span class="main"></span>');
            img.attr("src",obj[i].avatar);
            span.text(obj[i].username);
            span1.text(obj[i].is_liked);
            span2.text("分钟");
            span3.text("NO."+parseInt(i+1));
            p.append(img);
            p.append(span);
            p.append(span2);
            p.append(span1);
            a.append(p);
            div.append(span3);
            div.append(a);
            $(".section_text_box").append(div);
            
        }
    }
});

$.ajax({
    url:"../data/data.php?type=list_two",
    type:"get",
    success:function (data) {
        var obj = JSON.parse(data).data;
        console.log(obj);
        for(var i = 0; i < obj.length; i++){
            var div = $('<div></div>');
            var div1 = $('<div class="nub_NO"></div>');
            var div2 = $('<div class="section_text_box_two_img"></div>'); 
            var img = $('<span></span>');
            var a = $('<a href="personalHomepage.html"></a>');
            var img1 = $('<img src="" alt="" />');
            var p = $('<p></p>');
            var span = $('<span></span>');
            img.text("NO."+parseInt(i+1));
            img1.attr("src",obj[i].avatar);
            p.text(obj[i].username);
            span.text(obj[i].number);
            a.append(img1);
            a.append(p);
            a.append(span);
            div2.append(a);
            div1.append(img);
            div.append(div1);
            div.append(div2);
            $('.section_text_box_two').append(div);
            var obj1 = obj[i].selected_stories;
            for(var j = 0;j < obj1.length; j++){
                var aa = $('<a href="details_page_m.html"></a>');
                var imgg = $('<img src="" alt="" />');
                aa.append(imgg);
                div.append(aa);
                imgg.attr('src',obj1[j].image);
                $('.section_text_box_two').append(div);
            }
            
        }

    }
});
}        
