document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = 
    "Thank you for reaching out. Ella will contact you soon.";
});


function copyWallet() {
  const wallet = document.getElementById("walletAddress").innerText;
  navigator.clipboard.writeText(wallet);
  alert("Wallet address copied!");
}


document.getElementById("newsletterForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("newsletterMessage").innerText =
    "Thank you for subscribing. Healing insights are on their way.";
});


// Wait until the entire page (DOM) is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

  // Select all elements with the class "read-more-btn"
  const buttons = document.querySelectorAll(".read-more-btn");

  // Loop through each button and attach a click event listener
  buttons.forEach(button => {

    button.addEventListener("click", function (e) {

      // Prevent the default anchor behavior (jumping to top of page)
      e.preventDefault();

      // Find the hidden text (span with class "more-text") 
      // inside the previous paragraph element
      const moreText = this.previousElementSibling.querySelector(".more-text");

      // Check if the extra text is currently visible
      if (moreText.style.display === "inline") {

        // If visible → hide it
        moreText.style.display = "none";

        // Change button text back to "Read More"
        this.textContent = "Read More";

      } else {

        // If hidden → show it
        moreText.style.display = "inline";

        // Change button text to "Read Less"
        this.textContent = "Read Less";
      }
    });
  });
});