new Swiper(".swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

// history img
const historyImg = document.getElementsByName("history-img");

const onClick = (e) => {
  const { x, y, width, height } = historyImg.getBoundingClientRect();
  const radius = Math.sqrt(width * width + height * height);
  historyImg.style.setProperty("--diameter", radius * 2 + "px");
};

historyImg.addEventListener("click", onClick);
