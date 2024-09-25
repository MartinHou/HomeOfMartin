document.getElementById('scrollTop').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll to the top

  });
});
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navigation');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('scrolled'); // Add the 'scrolled' class when user scrolls down
  } else {
    navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when user is at the top
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('div[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  function highlightLink() {
    var navbar = document.querySelector('.navigation');
    var navbarHeight = navbar.offsetHeight;
    var currentSection = '';
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var scrollPosition = window.scrollY + navbarHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    }); // Remove active class from all links

    navLinks.forEach(function (link) {
      link.classList.remove('active');

      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active'); // Add active class to the current section link
      }
    });
  } // Listen for scroll events


  window.addEventListener('scroll', highlightLink);
  window.addEventListener('load', highlightLink); // Call it on page load
});
document.querySelectorAll('.nav-link').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    var targetID = this.getAttribute('href'); // Get target section ID

    var targetElement = document.querySelector(targetID); // Get the target element

    var navbar = document.querySelector('.navigation'); // Get the navigation bar

    var navbarHeight = navbar.offsetHeight; // Get the current height of the navigation bar
    // Adjust for the larger navbar when on the "Intro" section

    if (targetID === '#intro' && navbar.classList.contains('at-top')) {
      navbarHeight = 100; // Assume 100px for larger navbar at the top (change to your actual value)
    } // Custom smooth scroll behavior


    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight,
      // Scroll to the section minus the navbar height
      behavior: 'smooth' // Enable smooth scroll

    });
  });
});
var currentSlide = 0; // Start with the first slide

function showSlide(index) {
  var slides = document.querySelectorAll('.slide');
  var totalSlides = slides.length; // Ensure the index loops around when reaching the end or beginning

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  } // Calculate the translation amount


  var offset = -currentSlide * 100;
  document.querySelector('.carousel-container').style.transform = "translateX(".concat(offset, "%)");
}

function nextSlide() {
  showSlide(currentSlide + 1); // Go to the next slide
}

function prevSlide() {
  showSlide(currentSlide - 1); // Go to the previous slide
} // Function to open the modal


function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
} // Function to close the modal


function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
} // Close the modal when clicking anywhere outside the modal content


window.onclick = function (event) {
  var modals = document.querySelectorAll('.modal');
  modals.forEach(function (modal) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};