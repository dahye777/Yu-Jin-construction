$(document).ready(function () {
  //gnb
  $("#gnb>li").hover(
    function () {
      $(".bgGnb, .sub").stop().slideDown();
    },
    function () {
      $(".bgGnb, .sub").stop().slideUp();
    }
  );
  //모달 팝업
  $(".notice>.content>ul>li")
    .eq(0)
    .on("click", function () {
      $(".popup").css("display", "block");
    });
  $("#close").on("click", function () {
    $(".popup").css({ display: "none" });
  });
  //슬라이더
  $("#slide .frame li").eq(0).siblings().hide();
  //eq(0).siblings() 0인덱스의 형제요소를 모두 선택합니다
  //단 eq(0)는 제외
  var slideIndex = 0;
  setInterval(function () {
    if (slideIndex < 2) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }

    $("#slide .frame li").eq(slideIndex).siblings().fadeOut(500);
    $("#slide .frame li").eq(slideIndex).fadeIn(500);
  }, 3000);

  //갤러리 마우스 오버
  $(".gallery>.content>a>img").css({ opacity: "0.6" });
  $(".gallery>.content>a").hover(
    function () {
      $(this).children("img").css("opacity", "1");
    },
    function () {
      $(this).children("img").css("opacity", "0.6");
    }
  );
});
