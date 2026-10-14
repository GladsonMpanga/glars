// Glars Private Secondary School — shared site interactions
document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.querySelectorAll("[data-year]");
  yearElements.forEach((element) => { element.textContent = new Date().getFullYear(); });

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuButton.textContent = isOpen ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
      });
    });
  }

  // This starter form opens the visitor's email application; it does not store submissions.
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent("Website enquiry: " + data.get("topic"));
      const body = encodeURIComponent(
        "Name: " + data.get("name") + "\\nEmail: " + data.get("email") +
        "\\nTopic: " + data.get("topic") + "\\n\\nMessage:\\n" + data.get("message")
      );
      const status = document.getElementById("formStatus");
      status.textContent = "Opening your email app. Please replace the sample school email in script.js with the official address.";
      // TODO: Replace school@example.com with the school's official email.
      window.location.href = "mailto:school@example.com?subject=" + subject + "&body=" + body;
    });
  }
});