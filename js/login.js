$(".form").validate({
	submitHandler:function(){		
		var data =$(".form").serialize();
		$.ajax({
			url:"../data/login.php",
			data:data,
			success:function(data){
				console.log(data);
				var obj = JSON.parse(data);
				console.log(obj);
				alert(obj.msg);
				var iconUrl = obj.iconUrl;
				if(obj.code == 1){
					location.href = "../index.html";
				}	
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
	    }
	}
});
function fun(){
	location.href="../index.html";
}