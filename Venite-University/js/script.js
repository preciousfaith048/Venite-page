/**
 * Venite University - Standalone Interactive script
 * Manages statistics counters, contact validations, dynamic category filters, and navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Loading Animation Fadeout
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // 2. Sticky Navbar transformation
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 3. Scroll to Top Button Visibility
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Statistics Counter Animation
    const statsElements = document.querySelectorAll('.counter-val');
    if (statsElements.length > 0) {
        const animateCounters = () => {
            statsElements.forEach(el => {
                const target = parseInt(el.getAttribute('data-target'), 10);
                const duration = 2000; // 2 seconds
                let start = 0;
                const increment = Math.ceil(target / 100);
                const stepTime = Math.abs(Math.floor(duration / (target / increment)));

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        el.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        el.textContent = start.toLocaleString();
                    }
                }, Math.max(stepTime, 20));
            });
        };

        // Trigger on entering viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect(); // Animate only once
                }
            });
        }, { threshold: 0.1 });

        observer.observe(document.querySelector('.stats-grid') || statsElements[0]);
    }

    // 5. Contact Form Validation
    const contactForm = document.getElementById('inquiry-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const phone = document.getElementById('contact-phone').value.trim();
            const subject = document.getElementById('contact-subject').value.trim();
            const message = document.getElementById('contact-message').value.trim();
            
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const phoneError = document.getElementById('phone-error');
            const subjectError = document.getElementById('subject-error');
            const messageError = document.getElementById('message-error');
            const successAlert = document.getElementById('form-success-alert');

            // Reset errors
            let isValid = true;
            [nameError, emailError, phoneError, subjectError, messageError].forEach(el => {
                if (el) {
                    el.textContent = '';
                    el.style.display = 'none';
                }
            });
            if (successAlert) {
                successAlert.style.display = 'none';
            }

            // Name
            if (!name) {
                nameError.textContent = 'Full name is required';
                nameError.style.display = 'block';
                isValid = false;
            }

            // Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                emailError.textContent = 'Email address is required';
                emailError.style.display = 'block';
                isValid = false;
            } else if (!emailPattern.test(email)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.style.display = 'block';
                isValid = false;
            }

            // Phone
            if (!phone) {
                phoneError.textContent = 'Phone number is required';
                phoneError.style.display = 'block';
                isValid = false;
            }

            // Subject
            if (!subject) {
                subjectError.textContent = 'Subject is required';
                subjectError.style.display = 'block';
                isValid = false;
            }

            // Message
            if (!message) {
                messageError.textContent = 'Message is required';
                messageError.style.display = 'block';
                isValid = false;
            } else if (message.length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                messageError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Submit Simulation
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const origBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Dispatching...';

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origBtnText;
                    if (successAlert) {
                        successAlert.style.display = 'block';
                        contactForm.reset();
                        window.scrollTo({
                            top: successAlert.offsetTop - 120,
                            behavior: 'smooth'
                        });
                    }
                }, 1500);
            }
        });
    }

    // 6. Admissions Modal Form Validation
    const modalForm = document.getElementById('admissions-modal-form');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const firstName = document.getElementById('modal-first-name').value.trim();
            const lastName = document.getElementById('modal-last-name').value.trim();
            const email = document.getElementById('modal-email').value.trim();
            const phone = document.getElementById('modal-phone').value.trim();
            const program = document.getElementById('modal-program').value;
            const gpa = parseFloat(document.getElementById('modal-gpa').value);

            let isValid = true;

            // Reset borders
            modalForm.querySelectorAll('input, select').forEach(el => {
                el.classList.remove('is-invalid');
            });

            if (!firstName) {
                document.getElementById('modal-first-name').classList.add('is-invalid');
                isValid = false;
            }
            if (!lastName) {
                document.getElementById('modal-last-name').classList.add('is-invalid');
                isValid = false;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                document.getElementById('modal-email').classList.add('is-invalid');
                isValid = false;
            }
            if (!phone) {
                document.getElementById('modal-phone').classList.add('is-invalid');
                isValid = false;
            }
            if (!program) {
                document.getElementById('modal-program').classList.add('is-invalid');
                isValid = false;
            }
            if (isNaN(gpa) || gpa < 0 || gpa > 5.0) {
                document.getElementById('modal-gpa').classList.add('is-invalid');
                isValid = false;
            }

            if (isValid) {
                const modalSubmit = modalForm.querySelector('button[type="submit"]');
                const origText = modalSubmit.innerHTML;
                modalSubmit.disabled = true;
                modalSubmit.innerHTML = 'Processing Application...';

                setTimeout(() => {
                    modalSubmit.disabled = false;
                    modalSubmit.innerHTML = origText;
                    
                    // Show success block inside modal
                    const bodyEl = document.getElementById('modal-form-body');
                    const successEl = document.getElementById('modal-success-body');
                    if (bodyEl && successEl) {
                        bodyEl.style.display = 'none';
                        successEl.style.display = 'block';
                        document.getElementById('modal-user-name').textContent = firstName;
                    }
                }, 1500);
            }
        });
    }

    // 7. Academic Programme Page Filters
    const filterButtons = document.querySelectorAll('.program-pill-btn');
    const cards = document.querySelectorAll('.programme-card-item');

    if (filterButtons.length > 0 && cards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Toggle active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                cards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = 'block';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                        card.style.opacity = '0';
                    }
                });
            });
        });
    }
});
