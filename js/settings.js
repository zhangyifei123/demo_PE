var isShow = false;
function switchs(){
    if(!isShow){
        $("#turn_off").attr("src","../images/SwitchOn.png");
        isShow = true;
    }else{
        $("#turn_off").attr("src","../images/SwitchOff.png");
        isShow = false;
    }
}