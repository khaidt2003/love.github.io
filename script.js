const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
var gifImage = document.getElementById("gif");
let mouseOverCount = 0;
// Lưu vị trí ban đầu của nút "no" khi trang web được tải
let initialNoBtnPosition = {
  left: noBtn.style.left || getComputedStyle(noBtn).left,
  top: noBtn.style.top || getComputedStyle(noBtn).top,
};

console.log(gifImage);

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, anh cũng thích em <3 <3";
  gif.src = "thu.jpg";
  gifImage.classList.add("fadeIn");
  // Đặt vị trí của nút "yes" bằng vị trí ban đầu của nút "no"
  yesBtn.style.left = initialNoBtnPosition.left;
  yesBtn.style.top = initialNoBtnPosition.top;
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  initialNoBtnPosition = {
    left: noBtn.style.left || getComputedStyle(noBtn).left,
    top: noBtn.style.top || getComputedStyle(noBtn).top,
  };
  mouseOverCount++;
  if(mouseOverCount == 1){
    yesBtn.style.left = (parseInt(initialNoBtnPosition.left) + 150) + "px";
    yesBtn.style.top = noBtn.style.top;
  }else{
    yesBtn.style.left = (parseInt(noBtn.style.left) + noBtnRect.width + 40) + "px";
    yesBtn.style.top = noBtn.style.top;
  }
  
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);
  while((randomX - (parseInt(noBtn.style.left) + noBtnRect.width + 40)) < 190 && (randomX - (parseInt(noBtn.style.left) + noBtnRect.width + 40))> 0){
    console.log((randomX - (parseInt(noBtn.style.left) + noBtnRect.width + 40)))
    randomX = Math.floor(Math.random() * maxX);
    randomY = Math.floor(Math.random() * maxY);
  }
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  
  question.innerHTML = "Noooo, Nhấn không được đâu đừng có cố, Nhấn vào yes đi này";
});
