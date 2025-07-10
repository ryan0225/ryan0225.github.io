document.addEventListener('click', (e) => {
  const particles = 25;
  const minRadius = 20; // 更小的距離
  const maxRadius = 40;

  const colors = ['#ff3c3c', '#ffd93d', '#42caff', '#ff8ae2', '#66ff66', '#ffa07a'];

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('div');
    particle.className = 'firework-particle';

    // 隨機大小
    const size = 4 + Math.random() * 6; // 4px ~ 10px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    const angle = Math.random() * 2 * Math.PI;
    const radius = minRadius + Math.random() * (maxRadius - minRadius);
    const offsetX = radius * Math.cos(angle);
    const offsetY = radius * Math.sin(angle);

    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;

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
      duration: 500, // 更快
      easing: 'ease-out',
    });

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 500);
  }
});
