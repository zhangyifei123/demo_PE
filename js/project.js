$.ajax({
	url:"../data/data.php?type=theme",
	type:"get",
	success:function (data) {
		var obj = JSON.parse(data).data;
		console.log(obj);
		for(var i = 0; i < obj.length; i++){
			var li = $('<li></li>');
			var a = $('<a href="DetailsOfTheArticle.html"></a>');
			var img =$('<img src="" alt="" />');
			var p = $('<p></p>');
			var span = $('<span></span>');
			img.attr("src",obj[i].image);
			p.text(obj[i].text);
			span.text(obj[i].nametext);
			
			a.append(img);
			a.append(p);
			a.append(span);
			li.append(a);
			$("ul").append(li);
		}
	}
});