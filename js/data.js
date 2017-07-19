$.ajax({
    url:"../data/data.php?type=plaza_read",
    type:"get",
    success: function (data) {
    	var article = JSON.parse(data).data;
    	console.log(article);

    	for (var i = 0; i < article.length; i++) {
            // 红色图
            var div = $("<div class='bgimage'><div class='div_con'></div><img src='../images/biaoqian.png' alt='' ></div>")
            // 块
    		var div_kuai = $("<div class='div_kuai'></div>");
            // 获取的内容图
            var img = $("<img class='imglist'/>");
            // 标题列表
    		var p = $("<p class='pList'></p>");
            //标题内容
    		var p1 = $("<p class='pList1'></p>");
            //底部
            var block = $("<div class='block'></div>");
            //获取的标题
            var title = $("<div class='content_title'></div>");
	    	img.attr("src",article[i].meta.image);
	    	p.text(article[i].meta.title);
	    	p1.text(article[i].meta.description);
            title.text(article[i].meta.theme.name); 
            console.log(article[i].feed_uid)
            $(".data>.a").append(title);
            $(".data>.a").append(div);
            $(".data>.a").append(div_kuai);
            $(".data>.a").append(img);
            $(".data>.a").append(p);
            $(".data>.a").append(p1);
            $(".data>.a").append(block);
        }
    }
});
// 判断显示与否
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