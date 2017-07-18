var isShow = false;
function fun(){
    if (!isShow) {
        $("#square").attr("src","../images/btn_show_all_feed_n.png");
        $(".only_look_at_pictures").text("全部动态");
        $("#dynamic").text("照片");
        $(".issue_p").text("拍一张照片");
        isShow = true;
    }else{
        $("#square").attr("src","../images/btn_show_photo_feed_n.png");
        $(".only_look_at_pictures").text("只看图片");
        $("#dynamic").text("动态");
        $(".issue_p").text("还没有发布健身动态");
        isShow = false;
    }
}