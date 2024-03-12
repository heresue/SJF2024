new Swiper(".swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

// notice accordion
const accordion = document.querySelector(".accordion");

function toggleAccordion() {
  const clickedItem = this.parentNode;
  const items = accordion.querySelectorAll("li");

  items.forEach((item) => {
    if (clickedItem === item) {
      item.classList.toggle("on");
    } else {
      item.classList.remove("on");
    }
  });

  const titles = accordion.querySelectorAll(".title");
  titles.forEach((title) => {
    title.addEventListener("click", toggleAccordion);
  });
}

// history img
const historyBox = document.getElementById("historyBox");

const onClick = (e) => {
  const { x, y, width, height } = historyBox.getBoundingClientRect();
  const radius = Math.sqrt(width * width + height * height);
  historyBox.style.setProperty("--diameter", radius * 2 + "px");
  const { clientX, clientY } = e;
  const left = ((clientX - x - radius) / width) * 100 + "%";
  const top = ((clientY - y - radius) / width) * 100 + "%";

  historyBox.style.setProperty("--left", left);
  historyBox.style.setProperty("--top", top);
  historyBox.style.setProperty("--a", "");
  setTimeout(() => {
    historyBox.style.setProperty("--a", "ripple-effect 1000ms linear");
  });
};

historyBox.addEventListener("click", onClick);
