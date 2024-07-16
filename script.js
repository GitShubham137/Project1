const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  if (link.href.includes(currentPage)) {
    link.classList.add('active');
  }
});