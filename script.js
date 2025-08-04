 document.getElementById("volunteer-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission
    alert("Thank you for volunteering!");
    window.location.href = "index.html"; // Redirect to homepage
  });