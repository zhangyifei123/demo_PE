//  function attention(){
//     $("#myAttention").css({"border-bottom":"2px solid red","color":"red"});
//     $("#myFans").css({"border-bottom":"none","color":"#333"});
//  }
// function fans(){
//     $("#myFans").css({"border-bottom":"2px solid red","color":"red"});
//     $("#myAttention").css({"border-bottom":"none","color":"#333"});
// }
var mySwiper = new Swiper('.swiper-container',{
    onSlideChangeEnd: function(swiper){

      $('.segment').removeClass('seg_highlight');
      $($('.segment')[swiper.activeIndex]).addClass('seg_highlight')
    }
})
function gotoIndex(ele,index){
    $('.segment').removeClass('seg_highlight');
    $(ele).addClass('seg_highlight');
    mySwiper.slideTo(index, 500, false);//切换到第一个slide，速度为1秒
}