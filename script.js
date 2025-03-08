document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");

  // Function to toggle sidebar
  window.toggleSidebar = function () {
      sidebar.classList.toggle("show");
  };

  // Function to close sidebar when clicking a link
  window.closeSidebar = function () {
      sidebar.classList.remove("show");
  };

  // Quote Slider
  const quotes = [
      '"Empowered women empower the world!"',
      '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
      '"Here’s to strong women: May we know them, may we be them, may we raise them."',
      '"A strong woman looks a challenge in the eye and gives it a wink."'
  ];
  
  let index = 0;
  setInterval(() => {
      document.getElementById("quote").innerText = quotes[index];
      index = (index + 1) % quotes.length;
  }, 3000);
});
