// Mobile menu toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        function openWhatsApp() {
      const phoneNumber = "6398675673"; // ✅ Replace with your number
      const message = encodeURIComponent("Hello Sir! I need some help.");
      const url = `https://wa.me/${6398675673}?text=${message}`;
      const popup = document.getElementById("welcomePopup");

      // Show popup
      popup.style.display = "block";

      // After 2 seconds, redirect to WhatsApp
      setTimeout(() => {
        popup.style.display = "none";

        // Detect if mobile
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
          window.location.href = url; // Open in same tab (mobile)
        } else {
          window.open(url, "_blank"); // New tab (desktop)
        }
      }, 2000);
    }
