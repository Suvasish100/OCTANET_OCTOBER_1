document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  
  // Here you can handle form submission, e.g., send data to a server
  alert(`Thank you for signing up, ${name}! A confirmation email will be sent to ${email}.`);
  
  // Reset the form
  this.reset();
});
