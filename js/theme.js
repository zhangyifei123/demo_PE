$.ajax({
	url:"../data/data.php?type=theme",
	type:"get",
	success:function (data) {
		var obj = JSON.parse(data).data;
		console.log(obj);
		for(var i = 0; i < obj.length; i++){
			var li = $('<li></li>');
			var a = $('<a href=""></a>');
			var img =$('<img src="" alt="" />');
			img.attr("src",obj[i].image);
			a.append(img);
			li.append(a);
			$("ul").append(li);
		}
	}
});