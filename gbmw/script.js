document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.image');
    var welcomeMessage = document.getElementById('welcomeMessage');
  
    // Function to toggle color
    function toggleColor() {
      welcomeMessage.classList.toggle('white-color');
    }
  
    // Adding event listener for animation end on the first image
    images[0].addEventListener('animationend', function() {
      // Call toggleColor function when the first image animation ends
      toggleColor();
    });
  
    // Adding event listener to navigate to the next page when clicked
    document.addEventListener('click', function() {
      window.location.href = document.getElementById('redirect-link').href;
    });
  });
  
  