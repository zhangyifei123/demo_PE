$.ajax({
    url:"../data/data.php?type=plaza_read",
    type:"get",
    success: function (data) {
        var article = JSON.parse(data).data;
        console.log(article);
        for (var i = 0; i < article.length; i++) {
            if (article[i].meta.theme.id==19) {
                var div = $("<div class='bgimage'><div class='div_con'></div><img src='../images/biaoqian.png' alt='' ></div>")
                var div_kuai = $("<div class='div_kuai'></div>");
                var img = $("<img class='imglist'/>");
                var p = $("<p class='pList'></p>");
                var p1 = $("<p class='pList1'></p>");
                var block = $("<div class='block'></div>")
                var title = $("<div class='content_title'></div>")
                img.attr("src",article[i].meta.image);
                p.text(article[i].meta.title);
                p1.text(article[i].meta.description);
                title.text(article[i].meta.theme.name);
                $(".data>.a").append(title);
                $(".data>.a").append(div);
                $(".data>.a").append(div_kuai);
                $(".data>.a").append(img);
                $(".data>.a").append(p);
                $(".data>.a").append(p1);
                $(".data>.a").append(block);
            } 
           
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
