// Получаем все элементы с классом "target"
const targets = document.querySelectorAll('.target');
let isDoubleClick = false;
let touchTimeout = null;
let currentTarget = null;



// Обрабатываем каждый элемент
targets.forEach(target => {
  let startX, startY;


  target.addEventListener('touchstart', function(e) {
    const touch = e.changedTouches[0];
    if (touchTimeout !== null) {
      clearTimeout(touchTimeout);
      touchTimeout = null;
      isDoubleClick=true;
      e.preventDefault();
      currentTarget = this;
    } else {
      touchTimeout = setTimeout(function() {
        currentTarget = null;
        touchTimeout = null;
       isDoubleClick=false;
        
      }, 150);
    }
    startX = touch.clientX - this.offsetLeft;
    startY = touch.clientY - this.offsetTop;
    lastX = target.offsetLeft;
    lastY = target.offsetTop;
  });


  document.addEventListener('touchstart', function(e) {
     if(isDoubleClick == true){
      const touch = e.changedTouches[0];
      const x = touch.clientX - startX;
      const y = touch.clientY - startY;
      currentTarget.style.left = x + 'px';
      currentTarget.style.top = y + 'px';
  }
});
  // Обработчик события touchmove
  target.addEventListener('touchmove', function(e) {
     if (isDoubleClick == false){
    e.preventDefault();

    

    const touch = e.changedTouches[0];
    const x = touch.clientX - startX;
    const y = touch.clientY - startY;

    // Перемещаем элемент на новую позицию
    this.style.left = x + 'px';
    this.style.top = y + 'px';
    }
    if (e.touches.lenght === 2)
    {
      target.style.left = `${lastX}px`;
      target.style.top = `${lastY}px`;
    }
   }
  );

  
  target.addEventListener('touchend', function(e) {
   console.log(isDoubleClick);
  });

  target.addEventListener('touchcancel', function(e) {
       target.style.left = `${lastX}px`;
       target.style.top = `${lastY}px`;
   });
});
