function random() {
  const btn = document.getElementById("button1");
  const img=document.getElementById("image");
  const text=document.getElementById("happy");
  
  // Отримуємо поточне значення marginTop (враховуємо "px")
  const currentMargin = parseInt(btn.style.marginTop) || 0;

  // Послідовна зміна станів через else if
  if (currentMargin === 0) {
    btn.style.marginTop = "100px";
    btn.innerHTML = "Тепер тут";
  } 
  else if (currentMargin === 100) {
    btn.style.marginTop = "50px";
    btn.innerHTML = "І останній раз";
  } 
  else {
    btn.style.display = "none";
    img.style.display = "inline";
    text.innerHTML = "З днем народження тебе!!!Бажаю тебе щастя, здоров'я.Щоб твої проекти були успішними,наприклад: зрадометр)))"
  }
}
