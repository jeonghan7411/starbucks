const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    // throttle은 최대한 적게 실행하기 위해 lodash 라이브러리에서 제공
    if (window.scrollY > 500) {
      //배지 숨기기
      // badgeEl.style.display = "none"; 기본 코드
      //gsap 라이브러리
      // gsap.to(요소,지속시간,옵션); 여기선 초단위임
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // ToTop 버튼보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
        display: "flex",
      });
    } else {
      //배지 보이기
      // badgeEl.style.display = "block";

      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // ToTop 버튼숨기기
      // gsap에서는 css선택자만으로도 찾을 수 있음
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
//_.throttle(함수,시간)
//0.3초 단위
//lodash 라이브러리 사용

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: {
    // 자동 재생 여부
    delay: 5000, // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    // 페이지 번호 사용 여부
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
    nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
  },
});

new Swiper(".awards .swiper-container", {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".awards .swiper-prev", // 이전 버튼 선택자
    nextEl: ".awards .swiper-next", // 다음 버튼 선택자
  },
});

// promotion

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소,시간(초단위),옵션)
  //gsap에서는 매개변수(css선택자)로 바로 찾아 주기 때문에 이렇게 사용가능
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //gsap 옵션에서 -1이면 무한
    yoyo: true, //gsap 옵션
    ease: "power1.inOut",
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// scroll magic
const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
