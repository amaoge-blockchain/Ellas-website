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

