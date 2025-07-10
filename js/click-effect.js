document.addEventListener('click', function (e) {
  let n = 20;
  for (let i = 0; i < n; i++) {
    const particle = document.createElement('div');
    particle.classList.add('firework-particle');
    document.body.appendChild(particle);

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 80;
    const x = e.clientX + radius * Math.cos(angle);
    const y = e.clientY + radius * Math.sin(angle);

    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.setProperty('--x', x + 'px');
    particle.style.setProperty('--y', y + 'px');
    particle.style.setProperty('--i', Math.random());

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
});