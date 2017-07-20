$.ajax({
    url:"../data/getUsers.php?type=friendlist",
    type:"get",
    success:function(data) {
        var obj = JSON.parse(data).users;
        console.log(obj);
        for (var i = 0; i < obj.length; i++) {
            var div1 = $('<div class = "head_portrait"></div>');
            var div2 = $('<div class = "head_portrait_details"></div>');
            var a = $('<a href=""></a>');
            var div3 = $('<div class = "two_span"></div>')
            var img1 = $('<img src="" class = "img-circle"/>');
            var span1 = $('<span class = "username"></span>');
            var span2 = $('<span class = "editors_recommend"></span>');
            var img2 = $('<img src="" class = "with_focus_on" />');

            var pictures = $('<div class = "fourPictures"></div>');
            var four_picture = $('<div class = "picture_show"></div>');
            var picture_shows_link1 = $('<a href="details_page_m.html"></a>');
            var picture_shows_link2 = $('<a href="details_page_m.html"></a>');
            var picture_shows_link3 = $('<a href="details_page_m.html"></a>');
            var picture_shows_link4 = $('<a href="details_page_m.html"></a>');
            var picture_show1 = $('<img src = "" />');
            var picture_show2 = $('<img src = "" />');
            var picture_show3 = $('<img src = "" />');
            var picture_show4 = $('<img src = "" />');

            a.append(img1);
            div3.append(span1);
            div3.append(span2);
            div2.append(a);
            div2.append(div3);
            div2.append(img2);
            div1.append(div2);
            $(".interested_person_details").append(div1);
            img1.attr("src",obj[i].avatar);
            span1.text(obj[i].username);
            span2.text(obj[i].desc);
            img2.attr("src","../images/followUserBtn@2x.png");

            picture_shows_link1.append(picture_show1);
            picture_shows_link2.append(picture_show2);
            picture_shows_link3.append(picture_show3);
            picture_shows_link4.append(picture_show4);
            four_picture.append(picture_shows_link1);
            four_picture.append(picture_shows_link2);
            four_picture.append(picture_shows_link3);
            four_picture.append(picture_shows_link4);
            pictures.append(four_picture);
            $(".interested_person_details").append(pictures);
            picture_show1.attr("src",obj[i].images[0].image);
            picture_show2.attr("src",obj[i].images[1].image);
            picture_show3.attr("src",obj[i].images[2].image);
            picture_show4.attr("src",obj[i].images[3].image);
            img2[0].addEventListener('touchstart',fun,false);

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
