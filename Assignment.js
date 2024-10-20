// JavaScript for Portfolio Contact Form

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
    
    // Reset form fields after submission
    event.target.reset();
});
