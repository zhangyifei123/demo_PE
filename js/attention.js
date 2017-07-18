 function attention(){
    $("#myAttention").css({"border-bottom":"2px solid red","color":"red"});
    $("#myFans").css({"border-bottom":"none","color":"#333"});
 }
function fans(){
    $("#myFans").css({"border-bottom":"2px solid red","color":"red"});
    $("#myAttention").css({"border-bottom":"none","color":"#333"});
}
var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical',
        // loop: true,
})