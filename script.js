const learnMoreButton = document.getElementById("learn-more");

learnMoreButton.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});


const contactForm = document.getElementsById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const studentName = document.getElementById("name").value.trim();
  
  formMessage.textContent = 
  "Thank You , " + studentName + "! Your form has been checked.";
  
  formMessage.style.color = "#0F766E";
  
  contactForm.reset();
});