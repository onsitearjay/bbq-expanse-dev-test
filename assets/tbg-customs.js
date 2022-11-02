document.querySelectorAll('.custom-variant-btn').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'activePage')
  }
})

document.querySelectorAll('.site-nav__expanded-item').forEach((menu) => menu.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.classList.toggle('is-focused');
}));