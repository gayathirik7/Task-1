// Add a scroll event listener to make the navbar sticky
window.onscroll = function() {
  handleScroll();
};

// Function to handle the sticky navbar effect
function handleScroll() {
  var navbar = document.getElementById("navbar");

  // Add sticky class when the page is scrolled more than 50px
  if (window.pageYOffset > 50) {
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
}

// Change background color of navbar links on hover
var navbarLinks = document.querySelectorAll('#navbar a');

// Add hover effect for each navbar link (including the shop name)
navbarLinks.forEach(function(link) {
  link.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#f39c12'; // Change to the hover color
      this.style.color = '#333'; // Change text color on hover
  });

  link.addEventListener('mouseout', function() {
      this.style.backgroundColor = ''; // Reset background color
      this.style.color = ''; // Reset text color
  });
});
