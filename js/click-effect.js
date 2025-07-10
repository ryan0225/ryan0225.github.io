document.addEventListener("click", function(e) {
  // 建立特效元素
  const ripple = document.createElement("div");
  ripple.className = "click-ripple";
  document.body.appendChild(ripple);

  // 計算位置與大小
  const size = Math.max(window.innerWidth, window.innerHeight);
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = e.clientX - size/2 + "px";
  ripple.style.top = e.clientY - size/2 + "px";

  // 動畫結束後移除
  setTimeout(() => document.body.removeChild(ripple), 500);
});