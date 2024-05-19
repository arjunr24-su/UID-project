/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) => {
  const toggleBtn = document.getElementById(headerToggle),
      nav = document.getElementById(navbarId)

  // Validate that variables exist
  if (headerToggle && navbarId) {
      toggleBtn.addEventListener('click', () => {
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
          // change icon
          toggleBtn.classList.toggle('bx-x')
      })
  }
}
showMenu('header-toggle', 'navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
  linkColor.forEach(l => l.classList.remove('active'))
  this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))
// JavaScript for Enlarging Image and Disabling Content

const carImage = document.getElementById('carImage');
const carText = document.getElementById('carText');
const enlargedText = document.querySelector('.enlarged-text');

carImage.addEventListener('click', () => {
  if (confirm("If you want to enlarge the image click OK")) {
      // Save the current state before enlarging the image
      history.pushState({ enlarged: true }, 'Enlarged Image', window.location.href);

      carImage.classList.add('car-enlarged');
      document.body.classList.add('disabled-content');
      enlargedText.style.display = 'none';
      carText.style.display = 'none';
  }
});

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.enlarged) {
      // When back button is pressed, revert the enlargement
      carImage.classList.remove('car-enlarged');
      document.body.classList.remove('disabled-content');
      enlargedText.style.display = 'block';
      carText.style.display = 'block';
  } else {
      // Default behavior: restore the original state
      carImage.classList.remove('car-enlarged');
      document.body.classList.remove('disabled-content');
      enlargedText.style.display = 'block';
      carText.style.display = 'block';
  }
});

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const searchSuggestions = document.querySelectorAll('.search-suggestions a');

  // Attach event listener to each car name link
  searchSuggestions.forEach(link => {
      link.addEventListener('click', (event) => {
          // Prevent default link behavior
          event.preventDefault();

          // Get the href attribute (URL) of the clicked link
          const href = link.getAttribute('href');

          // Navigate to the respective site
          window.location.href = href;
      });
  });
});


