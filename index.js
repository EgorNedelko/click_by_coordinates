(() => {
  const coords = document.createElement('div');

  Object.assign(coords.style, {
    position: 'fixed',
    pointerEvents: 'none',
    background: 'rgba(0,0,0,0.7)',
    color: '#fff',
    padding: '4px 6px',
    fontSize: '12px',
    borderRadius: '4px',
    zIndex: '999999'
  });

  document.body.appendChild(coords);

  document.addEventListener('mousemove', (e) => {
    coords.textContent = `X: ${e.pageX}, Y: ${e.pageY}`;
    coords.style.left = e.clientX + 12 + 'px';
    coords.style.top = e.clientY + 12 + 'px';
  });
})();

document.addEventListener('click', (e) => {
  const box = e.target.closest('.click-box');
  if (!box) return;

  box.classList.toggle('active');
});
