document.addEventListener('click', (e) => {
  const colors = ['#ff4b2b', '#ff416c', '#ff8000', '#ffd500', '#3cba54', '#00a8cc', '#911eb4', '#f032e6'];
  const count = 20;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('span');
    particle.classList.add('particle');

    const size = 4 + Math.random() * 6;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.position = 'fixed';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '1';

    document.body.appendChild(particle);

    const radius = 20 + Math.random() * 30;
    const angle = Math.random() * 2 * Math.PI;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;
    const duration = 300 + Math.random() * 400;

    const anim = particle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${offsetX}px, ${offsetY}px) scale(0)`, opacity: 0 }
    ], {
      duration: duration,
      easing: 'ease-out',
      fill: 'forwards'
    });

    anim.onfinish = () => {
      particle.remove();
    };
  }
});
