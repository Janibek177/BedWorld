document.addEventListener('DOMContentLoaded', () => {

    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 2200);

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    const cartCount = document.querySelector('.cart-count');
    const actionButtons = document.querySelectorAll('.action-btn');
    let count = 0;

    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card') || e.target.closest('.pop-card');
            const productName = card.querySelector('h3').textContent;
            
            count++;
            cartCount.textContent = count;

            cartCount.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 300);

            alert(`"${productName}" has been added to your selection!`);
        });
    });

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields in the Contact form.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Your message has been submitted successfully!');
        contactForm.reset();
    });

    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        const termsChecked = document.getElementById('termsCheckbox').checked;

        if (!name || !email || !password || !confirmPassword) {
            alert('Please complete all fields in the Sign Up form.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!termsChecked) {
            alert('You must accept the Terms and Conditions.');
            return;
        }

        alert('Your account has been registered successfully!');
        signupForm.reset();
    });

    const newsletterForm = document.getElementById('newsletterForm');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('newsletterEmail');
        const email = emailInput.value.trim();

        if (!email || !isValidEmail(email)) {
            alert('Please enter a valid email address to subscribe.');
            return;
        }

        alert('Thank you for subscribing to BDworld!');
        newsletterForm.reset();
    });

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});