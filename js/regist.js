$(".form").validate({
	submitHandler:function(){
		var data = new FormData($(".form")[0]);
		$.ajax({
			url:"../data/regist.php",
			data:data,
			type:"post",
			processData:false,
			contentType:false,
			success:function(data){
				console.log(data);
				var obj1 = data.slice(4);
				var obj = JSON.parse(obj1);
				alert(obj.msg);
			}
		});
	},
	rules:{
	    name:"required",
	    password:{
	    	required:true,
	    	rangelength:[6,15]
	    }
	},
	messages:{
	    name:"输入用户",
	    password:{
	    	required:"输入密码",
	    	rangelength:"重新输入"
	    },
	}
});
