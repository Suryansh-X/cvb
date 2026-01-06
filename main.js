// Digital clock
const clock = document.getElementById('digitalClock');
const updateDigitalClock = () => {
  const now = new Date();
  const hrs = now.getHours().toString().padStart(2, '0');
  const mins = now.getMinutes().toString().padStart(2, '0');
  const secs = now.getSeconds().toString().padStart(2, '0');
  clock.textContent = `${hrs}:${mins}:${secs}`;
  requestAnimationFrame(updateDigitalClock);
};
updateDigitalClock();

// Typing effect for name (Suryansh-X)
const typewriter = document.getElementById('typewriter');
const nameText = "Suryansh-X";
let i = 0;
const typeWriterAnimate = () => {
  if (i <= nameText.length) {
    typewriter.textContent = nameText.slice(0, i);
    i++;
    setTimeout(typeWriterAnimate, 150);
  } else {
    setTimeout(() => {
      i = 0;
      typeWriterAnimate();
    }, 1700);
  }
};
typeWriterAnimate();

// Autoplay BGM (loop)
addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgm-audio');
  if (audio) {
    audio.volume = 0.18;
    const playAudio = () => {
      audio.play();
    };
    playAudio();
    document.body.addEventListener('click', playAudio, { once: true });
  }
});

// Section particles
document.querySelectorAll('.section-particles-bg').forEach(canvas => {
  let w, h;
  let particles = [];

  const resize = () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    particles = [];
    for (let i = 0; i < Math.max(36, Math.floor(w * h / 9000)); i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.2 + 1.7,
        dy: 0.7 + Math.random() * 1.2,
        color: `rgba(${220 + Math.floor(Math.random() * 35)},${158 + Math.floor(Math.random() * 90)},${66 + Math.floor(Math.random() * 140)},0.7)`
      });
    }
  };
  addEventListener('resize', resize);
  resize();

  const drawParticles = () => {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
      p.y += p.dy;
      if (p.y > h) {
        p.y = -p.r;
        p.x = Math.random() * w;
        p.r = Math.random() * 2.2 + 1.7;
        p.dy = 0.7 + Math.random() * 1.2;
        p.color = `rgba(${220 + Math.floor(Math.random() * 35)},${158 + Math.floor(Math.random() * 90)},${66 + Math.floor(Math.random() * 140)},0.7)`;
      }
    }
    requestAnimationFrame(drawParticles);
  };
  drawParticles();
});

// Silver particles on profile
const silverParticles = () => {
  const canvas = document.getElementById('particles-silver');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = canvas.offsetWidth;
  let h = canvas.height = canvas.offsetHeight;
  let particles = [];
  const NUM = 22;

  const resetParticles = () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
    particles = [];
    for (let i = 0; i < NUM; i++) {
      particles.push({
        x: Math.random() * w * 0.85 + w * 0.08,
        y: h * (0.75 + Math.random() * 0.18),
        r: Math.random() * 2.2 + 2.2,
        dy: -(0.5 + Math.random() * 1.1),
        alpha: 0.45 + Math.random() * 0.35,
        drift: (Math.random() - 0.5) * 0.7
      });
    }
  };
  resetParticles();
  addEventListener('resize', resetParticles);

  const drawParticles = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "#babfc9";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#babfc9";
      ctx.fill();
      ctx.restore();
      p.y += p.dy;
      p.x += p.drift;
      if (p.y < h * 0.08 || Math.abs(p.x - w / 2) > w * 0.45) {
        p.x = Math.random() * w * 0.85 + w * 0.08;
        p.y = h * (0.75 + Math.random() * 0.18);
        p.r = Math.random() * 2.2 + 2.2;
        p.dy = -(0.5 + Math.random() * 1.1);
        p.alpha = 0.45 + Math.random() * 0.35;
        p.drift = (Math.random() - 0.5) * 0.7;
      }
    }
    requestAnimationFrame(drawParticles);
  };
  drawParticles();
};
addEventListener('DOMContentLoaded', silverParticles);

// Reveal sections on scroll
const revealSectionsOnScroll = () => {
  const sections = document.querySelectorAll(".section-content");
  const windowHeight = innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 80) {
      section.classList.add("visible");
    }
  });
};
addEventListener('scroll', revealSectionsOnScroll);
addEventListener('DOMContentLoaded', revealSectionsOnScroll);
addEventListener('resize', revealSectionsOnScroll);
