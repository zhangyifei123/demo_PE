$.ajax({
    url:"../data/data.php?type=get_info",
    type:"get",
    success: function (data) {
    	var banner = JSON.parse(data)
    	console.log(banner);
    }
});
