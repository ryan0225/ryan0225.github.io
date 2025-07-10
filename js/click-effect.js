document.addEventListener('click', (e) => {
  const particles = 20;
  const radius = 80;

  for (let i = 0; i < particles; i++) {
    const angle = (2 * Math.PI * i) / particles;
    const offsetX = radius * Math.cos(angle);
    const offsetY = radius * Math.sin(angle);

    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    particle.animate([
      {
        transform: 'translate(0, 0)',
        opacity: 1,
      },
      {
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        opacity: 0,
      },
    ], {
      duration: 800,
      easing: 'ease-out',
    });

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 800);
  }
});
