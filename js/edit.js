 function showCity(){
    var cities = [
    ["东城区",'西城区','朝阳区','丰台区','石景山区','海淀区','房山区','通州区','昌平区'],
    ['济南市','青岛市','日照市','烟台市','德州市','潍坊市'],
    ['南京市','苏州市','无锡市','常州市','徐州市','宿迁市'],
    ['合肥市','芜湖市','淮北市','淮南市','宿州市'],
    ['郑州市','开封市','洛阳市','南阳市','驻马店市','新乡市']
     ];

    var province = document.getElementById('province');

    var city = document.getElementById('city');

    city.innerHTML = "";

    // console.log(cities[province.selectedIndex]);

    var curCities = cities[province.selectedIndex];
    for (var i = 0; i < curCities.length; i++) {
    var option  = new Option(curCities[i]);
        city.appendChild(option);
        }
    }