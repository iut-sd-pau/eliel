document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const envelopeScreen = document.getElementById('envelopeScreen');
  const inviteScreen = document.getElementById('inviteScreen');
  const musicAudio = document.getElementById('musicAudio');
  const openAudio = document.getElementById('openAudio');
  const soundToggle = document.getElementById('soundToggle');
  const iconOn = document.getElementById('iconSoundOn');
  const iconOff = document.getElementById('iconSoundOff');
  const countdownEl = document.getElementById('countdown');

  const COLORS = ['#A9C7E0', '#E3D5B8', '#8FB8D9', '#D9C9A8', '#F2ECDF'];

  function spawnConfetti(container, count) {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      const size = 6 + Math.random() * 8;
      const isCircle = Math.random() > 0.5;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = Math.random() * 100 + '%';
      el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
      el.style.borderRadius = isCircle ? '50%' : '2px';
      const dur = 5 + Math.random() * 5;
      const delay = Math.random() * 6;
      el.style.animationDuration = dur + 's';
      el.style.animationDelay = delay + 's';
      container.appendChild(el);
    }
  }

  spawnConfetti(document.getElementById('inviteConfetti'), 40);

  let opened = false;

  function openEnvelope() {
    if (opened) return;
    opened = true;

    // sound + haptic
    try {
      openAudio.currentTime = 0;
      openAudio.play().catch(() => {});
    } catch (e) {}
    if (navigator.vibrate) navigator.vibrate(30);

    envelope.classList.add('opened');

    setTimeout(() => {
      envelopeScreen.classList.add('hidden');
      inviteScreen.classList.remove('hidden');
      startCountdown();
      try {
        musicAudio.volume = 0.55;
        musicAudio.play().catch(() => {
          // fallback: wait for a tap if autoplay blocked
          document.addEventListener('touchstart', tryPlayOnce, { once: true });
          document.addEventListener('click', tryPlayOnce, { once: true });
        });
      } catch (e) {}
    }, 950);
  }

  function tryPlayOnce() {
    musicAudio.play().catch(() => {});
  }

  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('touchend', (e) => { e.preventDefault(); openEnvelope(); }, { passive: false });

  let muted = false;
  soundToggle.addEventListener('click', () => {
    muted = !muted;
    musicAudio.muted = muted;
    iconOn.style.display = muted ? 'none' : 'block';
    iconOff.style.display = muted ? 'block' : 'none';
  });

  function startCountdown() {
    const target = new Date('2026-07-17T12:00:00+01:00').getTime();
    function tick() {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        countdownEl.textContent = "C'est aujourd'hui !";
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      countdownEl.textContent = `J - ${days} jour${days > 1 ? 's' : ''} et ${hours}h avant la fete`;
    }
    tick();
    setInterval(tick, 60000);
  }
});
