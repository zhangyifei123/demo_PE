$.ajax({
    url:"../data/data.php?type=plaza_video",
    type:"get",
    success: function (data) {
    	var article = JSON.parse(data).data;
    	console.log(article);
    	for (var i = 0; i < article.length; i++) {
          if (article[i].theme.id==38) {

            var p = $("<p class='p_img'><img src='../images/biaoqian.png' alt=''/></p>");
            var div_kuai = $("<div class='div_kuai'></div>");
            var p_video1 = $("<video src='' poster='' controls='' playsinline -webkit-playsinline class='p_video1'></video>");
            var p_title_bottom = $("<p class='p_bottom_title'></p>");
            var p_content_bottom = $("<p class='p_bottom_content'></p>");
            var block = $("<div class='block'></div>");
            var p_one = $("<p class='p_title'></p>");
            p_one.text(article[i].theme.name);
            p_video1.attr('src',article[i].video);
            p_video1.attr('poster',article[i].image_list);
            console.log(article[i].video);
            p_title_bottom.text(article[i].title);
            p_content_bottom.text(article[i].description);
            $('.main_div').append(p_one);
            $('.main_div').append(p);
            $('.main_div').append(div_kuai);
            $('.main_div').append(p_video1);
            $('.main_div').append(p_title_bottom);
            $('.main_div').append(p_content_bottom);
            $(".main_div").append(block);
          }
        }
    }
});



//!#
var isshow = false;
 $(".nav_img").click(function(){
     if (!isshow) {
        $(".classification").slideDown();
        isshow = true;
    } else{
        $(".classification").slideUp();
        isshow = false;
    }
})