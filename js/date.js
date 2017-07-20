
		var time = new Date();
		var time1 = document.getElementById('time');
        var month = time.getMonth() + 1;
        var strDate = time.getDate();
        var mytime=time.toLocaleTimeString()
		time1.textContent = month+"月"+strDate+"日"+mytime;