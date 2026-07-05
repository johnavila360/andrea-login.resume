// script.js – Enhanced Interactive features for BSIS Student Resume with 100x enhancements

document.addEventListener('DOMContentLoaded', () => {
    // ----- 1. Enhanced Animated skill bars with stagger effect -----
    const skillBars = document.querySelectorAll('.skill-bar div');
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
            // Add completion effect
            setTimeout(() => {
                bar.style.background = 'linear-gradient(90deg, #34d399, #6C63FF)';
                setTimeout(() => {
                    bar.style.background = 'linear-gradient(90deg, #6C63FF, #a78bfa)';
                }, 300);
            }, 500);
        }, 200 + index * 100);
    });

    // ----- 2. Enhanced Counter animation with bounce effect -----
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'), 10);
                animateCounter(el, target);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });

    statNumbers.forEach(stat => observer.observe(stat));

    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000; // Slower for dramatic effect
        const steps = 80;
        const increment = Math.ceil(target / steps);
        const interval = duration / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                // Add celebration effect
                element.style.color = '#34d399';
                setTimeout(() => {
                    element.style.color = '#0f172a';
                }, 1000);
                clearInterval(timer);
                return;
            }
            element.textContent = current.toLocaleString();
            // Add pulse effect during counting
            element.style.transform = 'scale(1.2)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 50);
        }, interval);
    }

    // ----- 3. Enhanced Glow effect on stat cards with floating particles -----
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        // Mouse enter effect
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            
            // Create floating particles
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('span');
                particle.textContent = ['✨', '⭐', '🌟', '💫', '⚡'][Math.floor(Math.random() * 5)];
                particle.style.position = 'absolute';
                particle.style.fontSize = `${Math.random() * 20 + 10}px`;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.pointerEvents = 'none';
                particle.style.animation = `floatParticle${Math.random() * 2 + 1}s ease-out forwards`;
                particle.style.zIndex = '10';
                this.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 2000);
            }
        });
    });

    // Add particle animation keyframes dynamically
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
        @keyframes floatParticle1 {
            0% { transform: translate(0, 0) scale(0); opacity: 1; }
            100% { transform: translate(${Math.random() * 100 - 50}px, -100px) scale(1); opacity: 0; }
        }
        @keyframes floatParticle2 {
            0% { transform: translate(0, 0) scale(0); opacity: 1; }
            100% { transform: translate(${Math.random() * 100 - 50}px, -80px) scale(1.2); opacity: 0; }
        }
        @keyframes floatParticle3 {
            0% { transform: translate(0, 0) scale(0); opacity: 1; }
            100% { transform: translate(${Math.random() * 100 - 50}px, -120px) scale(0.8); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    // ----- 4. Interactive 3D tilt effect on cards -----
    const cards = document.querySelectorAll('.edu-item, .project-item, .achievement-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    // ----- 5. Smooth scroll reveal animation -----
    const sections = document.querySelectorAll('.profile, .education, .projects, .achievements, .stats-100x');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(50px)';
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => revealObserver.observe(section));

    // ----- 6. Interactive contact icons with ripple effect -----
    const contactItems = document.querySelectorAll('.contact-info p');
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(108, 99, 255, 0.3)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.pointerEvents = 'none';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.animation = 'rippleEffect 0.6s ease-out forwards';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement("style");
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(5); opacity: 0; }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ----- 7. Random color glow effect on sidebar -----
    const sidebar = document.querySelector('.sidebar');
    const colors = ['#6C63FF', '#a78bfa', '#34d399', '#f59e0b', '#ef4444', '#8b5cf6'];
    let colorIndex = 0;
    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        sidebar.style.boxShadow = `inset 0 0 100px ${colors[colorIndex]}33, 0 0 50px ${colors[colorIndex]}22`;
        sidebar.style.transition = 'box-shadow 2s ease';
    }, 3000);

    // ----- 8. Auto-scrolling interest tags effect -----
    const interestTags = document.querySelectorAll('.interest-tags span');
    let tagIndex = 0;
    setInterval(() => {
        tagIndex = (tagIndex + 1) % interestTags.length;
        interestTags.forEach((tag, i) => {
            if (i === tagIndex) {
                tag.style.background = 'rgba(108, 99, 255, 0.4)';
                tag.style.transform = 'scale(1.2)';
                tag.style.boxShadow = '0 8px 20px rgba(108, 99, 255, 0.3)';
            } else {
                tag.style.background = 'rgba(108, 99, 255, 0.15)';
                tag.style.transform = 'scale(1)';
                tag.style.boxShadow = 'none';
            }
        });
    }, 2000);

    // ----- 9. Console greeting with ASCII art -----
    console.log('%c🚀 BSIS Student Resume — Enhanced 100x', 'font-size: 20px; font-weight: bold; color: #6C63FF;');
    console.log('%c👨‍💻 Mark Andrie H. Maghinay — 2nd Year BSIS', 'font-size: 16px; color: #a78bfa;');
    console.log('%c✨ Built with ❤️ and 100x animations ✨', 'font-size: 14px; color: #34d399;');
    console.log('%c┌─────────────────────────────────────────┐', 'color: #94a3b8;');
    console.log('%c│  🎯 100x Enhanced Resume Dashboard      │', 'color: #94a3b8;');
    console.log('%c│  🔥 Interactive Animations              │', 'color: #94a3b8;');
    console.log('%c│  💫 3D Tilt Effects                    │', 'color: #94a3b8;');
    console.log('%c│  ✨ Particle Systems                   │', 'color: #94a3b8;');
    console.log('%c└─────────────────────────────────────────┘', 'color: #94a3b8;');

    // ----- 10. Dynamic background effect on resume wrapper -----
    const wrapper = document.querySelector('.resume-wrapper');
    wrapper.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const percentX = x / rect.width;
        const percentY = y / rect.height;
        
        const shadowX = (percentX - 0.5) * 20;
        const shadowY = (percentY - 0.5) * 20;
        
        this.style.boxShadow = `
            ${shadowX}px ${shadowY}px 60px rgba(0, 0, 0, 0.15),
            0 10px 20px rgba(0, 0, 0, 0.05)
        `;
    });

    wrapper.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.05)';
    });

    // ----- 11. Achievement card celebration on click -----
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create confetti
            for (let i = 0; i < 20; i++) {
                const confetti = document.createElement('div');
                confetti.textContent = ['🎉', '🎊', '⭐', '🌟', '💫', '✨', '🎈'][Math.floor(Math.random() * 7)];
                confetti.style.position = 'fixed';
                confetti.style.fontSize = `${Math.random() * 20 + 10}px`;
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.top = `${Math.random() * 100}%`;
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '1000';
                confetti.style.animation = `confettiFall${Math.random() * 2 + 1}s ease-out forwards`;
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }
            
            // Show message
            const span = this.querySelector('span');
            const originalText = span.textContent;
            span.textContent = '🎉 AWESOME! 🎉';
            span.style.color = '#6C63FF';
            span.style.fontWeight = 'bold';
            setTimeout(() => {
                span.textContent = originalText;
                span.style.color = '';
                span.style.fontWeight = '';
            }, 1500);
        });
    });

    // Add confetti animation
    const confettiStyle = document.createElement("style");
    confettiStyle.textContent = `
        @keyframes confettiFall1 {
            0% { transform: translate(0, 0) rotate(0deg) scale(0); opacity: 1; }
            100% { transform: translate(${Math.random() * 200 - 100}px, 500px) rotate(720deg) scale(1.5); opacity: 0; }
        }
        @keyframes confettiFall2 {
            0% { transform: translate(0, 0) rotate(0deg) scale(0); opacity: 1; }
            100% { transform: translate(${Math.random() * 200 - 100}px, 400px) rotate(-720deg) scale(2); opacity: 0; }
        }
        @keyframes confettiFall3 {
            0% { transform: translate(0, 0) rotate(0deg) scale(0); opacity: 1; }
            100% { transform: translate(${Math.random() * 200 - 100}px, 600px) rotate(360deg) scale(1.8); opacity: 0; }
        }
    `;
    document.head.appendChild(confettiStyle);

    // ----- 12. Auto-refreshing glow on education GPA -----
    const gpaValues = document.querySelectorAll('.gpa-value');
    setInterval(() => {
        gpaValues.forEach(gpa => {
            gpa.style.color = ['#6C63FF', '#a78bfa', '#34d399', '#f59e0b'][Math.floor(Math.random() * 4)];
            setTimeout(() => {
                gpa.style.color = '#6C63FF';
            }, 500);
        });
    }, 2000);

    // ----- 13. Tooltip on hover for project tech tags -----
    const techTags = document.querySelectorAll('.project-tech');
    techTags.forEach(tag => {
        const tooltip = document.createElement('span');
        tooltip.textContent = '💻 Click to learn more';
        tooltip.style.position = 'absolute';
        tooltip.style.background = 'rgba(15, 23, 42, 0.9)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '4px 12px';
        tooltip.style.borderRadius = '8px';
        tooltip.style.fontSize = '12px';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.opacity = '0';
        tooltip.style.transition = 'all 0.3s ease';
        tooltip.style.transform = 'translateY(-10px)';
        tag.style.position = 'relative';
        tag.appendChild(tooltip);
        
        tag.addEventListener('mouseenter', function() {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(-10px)';
        });
    });

    console.log('✅ All 100x enhancements loaded successfully!');
});