var Swiper = new Swiper('.swiper-container',{
	// paginationClickable:true,
	directipon:"vertical",
	loop:true,
	pagination:".swiper-pagination",
	paginationType:"custom",
	autoplay: 2000,
	autoplayDisableOnInteraction : false,
	paginationCustomRender:function(swiper,current,total) {
		
		var lis = document.querySelectorAll(".pe_point  li");
		for(var i = 0; i < lis.length; i++){
			lis[i].className = '';
		}
		lis[current - 1].className = "current";
	},
	spaceBetween:0,
	loop : true
});

//全部训练
$.ajax({
    url:"../data/data_mian.php?type=train",
    type:"get",
    success: function (data) {
    	var banner = JSON.parse(data).data;
    	console.log(banner);
    	var centers = banner.classification[0].image;
    	console.log(centers);
    	$(".Type_training").css("background-image","url("+centers+")");

        var centers = banner.classification[1].image;
    	console.log(centers);
    	$(".Type_training_two").css("background-image","url("+centers+")");
        
        var centers = banner.classification[2].image;
    	console.log(centers);
    	$(".Type_training_three").css("background-image","url("+centers+")");

        var centers = banner.classification[3].image;
    	console.log(centers);
    	$(".Type_training_fore").css("background-image","url("+centers+")");
        
        var centers = banner.classification[4].image;
    	console.log(centers);
    	$(".Type_training_five").css("background-image","url("+centers+")");
        
        var centers = banner.classification[5].image;
    	console.log(centers);
    	$(".Type_training_six").css("background-image","url("+centers+")");
 		
 		var centers = banner.classification[6].image;
    	console.log(centers);
    	$(".Type_training_seven").css("background-image","url("+centers+")");

    	var centers = banner.classification[7].image;
    	console.log(centers);
    	$(".Type_training_elght").css("background-image","url("+centers+")");

    	var centers = banner.classification[8].image;
    	console.log(centers);
    	$(".Type_training_nine").css("background-image","url("+centers+")");

    	var centers = banner.classification[9].image;
    	console.log(centers);
    	$(".Type_training_ten").css("background-image","url("+centers+")");

    	var centers = banner.classification[10].image;
    	console.log(centers);
    	$(".Type_training_next_one").css("background-image","url("+centers+")");

    	var centers = banner.classification[11].image;
    	console.log(centers);
    	$(".Type_training_next_two").css("background-image","url("+centers+")");

    	var centers = banner.classification[12].image;
    	console.log(centers);
    	$(".Type_training_next_three").css("background-image","url("+centers+")");

    	var centers = banner.classification[13].image;
    	console.log(centers);
    	$(".Type_training_next_fore").css("background-image","url("+centers+")");

    }
});