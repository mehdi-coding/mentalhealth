function scrollToContact() {
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
  }
}


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const formData = {
    name: this.name.value,
    company: this.company.value,
    email: this.email.value,
    phone: this.phone.value,
    message: this.message.value,
    newsletter: this.newsletter.checked
  };

  console.log("Form submitted:", formData);

  alert("✅ Message sent successfully!\nWe'll get back to you within 24 hours.");

  this.reset();
});