// ========== HAMBURGER MENU ==========
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}
 const heroBtn = document.getElementById("changeHeroBtn");
const heroText = document.getElementById("heroText");

if (heroBtn && heroText) {

    const texts = [
        "Creating modern and responsive web applications with clean design.",
        "I build interactive web applications using modern JavaScript and responsive UI design.",
        "Passionate about building beautiful and functional user experiences."
    ];

    let index = 0;

    heroBtn.addEventListener("click", () => {
        index = (index + 1) % texts.length;
        heroText.textContent = texts[index];
    });
}




// ========== SKILL CARD CLICK ==========
document.querySelectorAll(".skill-card").forEach(card => {
    let active = false;

    card.addEventListener("click", () => {
        const icon = card.querySelector(".skill-icon");

        if (!active) {
            card.style.transform = "scale(1.1)";
            card.style.background = "#38bdf8";
            card.style.color = "black";
            if (icon) icon.style.color = "black";
        } else {
            card.style.transform = "scale(1)";
            card.style.background = "";
            card.style.color = "";
            if (icon) icon.style.color = "";
        }

        active = !active;
    });
});


// ========== TAG CLICK ==========
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        tag.classList.toggle("active");
    });
});


// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// ========== FADE-IN ==========
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".section").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});


// ========== GREETING ==========
const greeting = document.getElementById("greeting");

if (greeting) {
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning! ☀️";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon! 🌤️";
    } else {
        greeting.textContent = "Good Evening! 🌙";
    }
}


// ========== DARK MODE ==========
const darkModeToggle = document.getElementById("darkModeToggle");

if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
// ========== FORM VALIDATION AND SUBMISSION ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formMsg = document.getElementById('formMsg');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateName() {
        const name = nameInput.value.trim();
        if (name.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters long';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validateMessage() {
        const message = messageInput.value.trim();
        if (message.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long';
            return false;
        }
        messageError.textContent = '';
        return true;
    }

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    nameInput.addEventListener('input', () => {
        if (nameError.textContent) validateName();
    });
    emailInput.addEventListener('input', () => {
        if (emailError.textContent) validateEmail();
    });
    messageInput.addEventListener('input', () => {
        if (messageError.textContent) validateMessage();
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            formMsg.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
            formMsg.style.color = '#00d4ff';
            
            contactForm.reset();
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            
            setTimeout(() => {
                formMsg.textContent = '';
            }, 5000);
        } else {
            formMsg.textContent = '⚠ Please fix the errors above';
            formMsg.style.color = '#ff6b9d';
        }
    });
}