document.addEventListener('click', (e) => {
  const particles = 25;
  const minRadius = 40;
  const maxRadius = 100;

  const colors = ['#ff3c3c', '#ffd93d', '#42caff', '#ff8ae2', '#66ff66', '#ffa07a'];

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    // 隨機方向
    const angle = Math.random() * 2 * Math.PI;
    const radius = minRadius + Math.random() * (maxRadius - minRadius);
    const offsetX = radius * Math.cos(angle);
    const offsetY = radius * Math.sin(angle);

    // 隨機顏色
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;

    particle.animate([
      {
        transform: 'translate(0, 0)',
        opacity: 1,
      },
      {
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        opacity: 0.3 + Math.random() * 0.5,
      },
    ], {
      duration: 1000,
      easing: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
    });

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
});
