const targets = document.querySelectorAll('.target');

let isDragging = false;
let startX, startY;

targets.forEach(target => {
    target.setAttribute('tabindex', '0');



    target.addEventListener('mousedown', e => {
      isDragging = true;
      startX = e.clientX - target.offsetLeft;
      startY = e.clientY - target.offsetTop;
      lastX = target.offsetLeft;
      lastY = target.offsetTop;
    });


  target.addEventListener('mousemove', e => {
    if (isDragging) {
      const x = e.clientX;
      const y = e.clientY;
      target.style.left = `${x - startX}px`;
      target.style.top = `${y - startY}px`;
    }
  });

  target.addEventListener('mouseup', e => {
      target.style.backgroundColor = 'red';
      isDragging = false;
  });

  target.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isDragging) {
      isDragging = false;
      target.style.left = `${lastX}px`;
      target.style.top = `${lastY}px`;
    }
  });
  

  target.addEventListener('dblclick', e => {
    isDragging = true;
    startX = e.clientX - target.offsetLeft;
    startY = e.clientY - target.offsetTop;
    target.style.backgroundColor = 'blue';
  });

  target.addEventListener('click', e => {
    isDragging = false;
    target.style.backgroundColor = 'red';
  });
});
