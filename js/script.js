const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) menuBtn.onclick = () => navLinks.classList.toggle('show');

document.querySelectorAll('.fade').forEach(el => {
  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) el.classList.add('in');
  }, { threshold: .15 });
  io.observe(el);
});

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card => {
      card.style.display = (f === 'all' || card.dataset.category === f) ? 'block' : 'none';
    });
  });
});

const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    if (!lightbox) return;
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});
if (lightbox) lightbox.addEventListener('click', () => lightbox.style.display = 'none');
