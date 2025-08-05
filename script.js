// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe partner logos for staggered animation
    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach((logo, index) => {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(20px)';
        logo.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(logo);
    });

    // Mobile menu functionality (if needed later)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const navMenu = document.querySelector('.nav-menu');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        // Add mobile menu styles
        const mobileStyles = `
            .mobile-menu-btn {
                display: none;
                flex-direction: column;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 18px;
                justify-content: space-between;
            }
            
            .mobile-menu-btn span {
                display: block;
                height: 2px;
                width: 100%;
                background-color: #333;
                transition: all 0.3s ease;
            }
            
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: flex;
                }
                
                .nav-menu {
                    position: fixed;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 2rem;
                    border-top: 1px solid rgba(0, 0, 0, 0.1);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                
                .nav-menu.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                
                .dropdown-menu {
                    position: static;
                    opacity: 1;
                    visibility: visible;
                    transform: none;
                    box-shadow: none;
                    border: none;
                    margin-top: 1rem;
                    padding-left: 1rem;
                }
            }
        `;
        
        // Add styles to head
        const styleSheet = document.createElement('style');
        styleSheet.textContent = mobileStyles;
        document.head.appendChild(styleSheet);
        
        // Insert mobile menu button
        nav.appendChild(mobileMenuBtn);
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    };

    // Initialize mobile menu for responsive design
    createMobileMenu();

    // Newsletter functionality - Permitir envío directo a Mailchimp
    const newsletterForms = document.querySelectorAll('#newsletter-form');
    if (newsletterForms.length > 0) {
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                // NO prevenir el comportamiento por defecto
                // Permitir que el formulario se envíe a Mailchimp directamente
                
                const emailInput = form.querySelector('#newsletter-email, [name="EMAIL"]');
                const button = form.querySelector('.newsletter-button');
                
                if (emailInput && emailInput.value.trim()) {
                    // Feedback visual mientras se procesa
                    if (button) {
                        const originalText = button.textContent;
                        button.textContent = 'Enviando...';
                        button.disabled = true;
                        
                        // Reset después de un momento (el formulario ya se habrá enviado)
                        setTimeout(() => {
                            button.textContent = originalText;
                            button.disabled = false;
                        }, 2000);
                    }
                    
                    console.log('Newsletter subscription submitted to Mailchimp:', emailInput.value);
                }
            });
        });
    }
    
    // Función helper para feedback visual
    function showNewsletterFeedback(form, emailInput, message) {
        const button = form.querySelector('.newsletter-button');
        const originalText = button.textContent;
        
        button.textContent = message;
        button.style.background = message.includes('Error') ? '#dc3545' : '#28a745';
        emailInput.value = '';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#000';
        }, 3000);
    }

    // Add contact form functionality (placeholder)
    const addContactForm = () => {
        const contactSection = document.createElement('section');
        contactSection.id = 'contacto';
        contactSection.className = 'contact-section';
        contactSection.innerHTML = `
            <div class="contact-content">
                <h3>¿Listo para potenciar tu negocio?</h3>
                <p>Contáctanos y descubre cómo podemos ayudarte a cambiar las reglas del juego.</p>
                <div class="contact-info">
                    <p>📧 hola@iwa.com.ar</p>
                    <p>📍 Posadas, Misiones, Argentina</p>
                </div>
            </div>
        `;
        
        // Add contact section styles
        const contactStyles = `
            .contact-section {
                max-width: 1000px;
                margin: 6rem auto 0;
                padding: 4rem 2rem;
                text-align: center;
                background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                border-radius: 16px;
            }
            
            .contact-content h3 {
                font-size: 2rem;
                margin-bottom: 1rem;
                color: #000;
            }
            
            .contact-content p {
                font-size: 1.125rem;
                color: #666;
                margin-bottom: 2rem;
            }
            
            .contact-info {
                display: flex;
                justify-content: center;
                gap: 3rem;
                flex-wrap: wrap;
            }
            
            .contact-info p {
                margin: 0;
                font-weight: 500;
                color: #333;
            }
            
            @media (max-width: 768px) {
                .contact-section {
                    margin: 4rem 1rem 0;
                    padding: 3rem 1.5rem;
                }
                
                .contact-info {
                    flex-direction: column;
                    gap: 1rem;
                }
            }
        `;
        
        const contactStyleSheet = document.createElement('style');
        contactStyleSheet.textContent = contactStyles;
        document.head.appendChild(contactStyleSheet);
        
        // Insert before footer
        const footer = document.querySelector('.footer');
        footer.parentNode.insertBefore(contactSection, footer);
    };

    // F1 Track functionality
    const addF1TrackInteractivity = () => {
        const servicePoints = document.querySelectorAll('.service-point');
        const legendItems = document.querySelectorAll('.legend-item');
        
        // Add click and hover effects to service points
        servicePoints.forEach(point => {
            const serviceName = point.getAttribute('data-service');
            
            // Hover effect
            point.addEventListener('mouseenter', () => {
                // Highlight corresponding legend item
                legendItems.forEach(item => {
                    if (item.textContent.trim() === serviceName) {
                        item.style.color = '#000';
                        item.style.fontWeight = '600';
                        item.style.transform = 'translateX(8px)';
                    }
                });
            });
            
            point.addEventListener('mouseleave', () => {
                // Reset legend items
                legendItems.forEach(item => {
                    item.style.color = '#666';
                    item.style.fontWeight = '400';
                    item.style.transform = 'translateX(0)';
                });
            });
            
            // Click effect - could open modal or show more info
            point.addEventListener('click', () => {
                console.log(`Clicked on service: ${serviceName}`);
                // Future: Could open service details modal
            });
        });
        
        // Add legend item interactions
        legendItems.forEach(item => {
            const serviceName = item.textContent.trim();
            
            item.addEventListener('mouseenter', () => {
                // Highlight corresponding service point
                servicePoints.forEach(point => {
                    if (point.getAttribute('data-service') === serviceName) {
                        point.style.transform = 'scale(1.5)';
                        point.style.filter = 'drop-shadow(0 0 8px rgba(0,0,0,0.5))';
                    }
                });
            });
            
            item.addEventListener('mouseleave', () => {
                // Reset service points
                servicePoints.forEach(point => {
                    point.style.transform = 'scale(1)';
                    point.style.filter = 'none';
                });
            });
        });
    };

    // Initialize F1 track if on services page
    if (document.querySelector('.f1-track')) {
        addF1TrackInteractivity();
    }

    // Log successful initialization
    console.log('IwA website initialized successfully! 🚀');
});
