document.querySelectorAll('.custom-variant-btn').forEach(link => {
  if(link.href === window.location.href){
    link.setAttribute('aria-current', 'activePage')
  }
})

document.querySelectorAll('.site-nav--is-megamenu').forEach((megamenu) => megamenu.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.classList.toggle('is-focused');
}));