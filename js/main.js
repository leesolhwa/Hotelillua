/* 스크롤이 되면 헤더 배경색이 들어감 */
$(window).scroll(function(){
  $('#header_wrap').addClass('scroll');

  if($(window).scrollTop() == 0){
    $('#header_wrap').removeClass('scroll');
  }
});
//.scrollTop() - 스크롤바 위치를 알아오거나 정함
//.scrollTop() == 0 - 화면제일 위에 있을때

/* 모바일 상태에서 햄버거 버튼을 누르면 메뉴가 보인다 */
$('.m_menuBtn').click(function(){
  $('.m_menuBtn').toggleClass('on');

  if($(this).hasClass('on')){
    $('.menu_container').fadeIn();
    $('body').css({'overflow':'hidden'})
  }else{
    $('.menu_container').fadeOut();
    $('body').css({'overflow':'auto'}) //auto말고 scroll해도 됨
  }
  //.fadeToggle(); - 스르륵 나타나게 하고 사라지는거 
});

/* 리사이즈 햇을때 생기는 문제 해결 */
$(window).resize(function(){
  //function(){a.preventDefault();} 원래 가지고 잇는 성질을 막아주는것 
  /*$('nav').removeattr('style'); 간단하게 해결*/
  let winW = $(window).width(); //브라우저의 가로길이를 변수에
  console.log('브라우저의 가로길이는?',winW);

  if(winW > 1023 && $('menu_container').is(':hidden')){
    console.log('menu_container가 안보여요! ㅜㅜ');
    $('menu_container').removeAttr('style');
  }
});