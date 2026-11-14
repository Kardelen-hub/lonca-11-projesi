// Mobil menü kontrolü
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Menü bağlantısına tıklanınca mobil menüyü kapat
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
    });
});

// Kayıt formu kontrolü
const registrationForm = document.querySelector("#registration-form");
const formMessage = document.querySelector("#form-message");

if (registrationForm) {
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (formMessage) {
            formMessage.textContent =
                "Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.";
            formMessage.style.display = "block";
        }

        registrationForm.reset();
    });
}
