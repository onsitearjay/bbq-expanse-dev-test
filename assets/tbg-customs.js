document.querySelectorAll('.custom-variant-btn').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'page')
  }
})

document.querySelectorAll('.site-nav--is-megamenu').forEach((menu) => menu.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.classList.toggle('is-focused');
}));