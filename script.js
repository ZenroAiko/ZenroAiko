

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    var targetId = this.getAttribute('href');
    var target = document.querySelector(targetId);

    if (!target) return;

    var nav = document.getElementById('main-nav');
    var navHeight = nav ? nav.offsetHeight : 0;
    var offset = 16; // extra breathing room in px

    var targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - offset;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  });
});

// Highlight the active nav link as you scroll
var sections = document.querySelectorAll('section[id], div[id]');
var navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', function() {
  var nav = document.getElementById('main-nav');
  var navHeight = nav ? nav.offsetHeight : 0;
  var scrollPos = window.scrollY + navHeight + 32;

  sections.forEach(function(section) {
    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});