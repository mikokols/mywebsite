// Smooth scrolling untuk navigasi
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Efek hover animasi pada proyek
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        project.style.transform = 'scale(1.05)';
        project.style.transition = '0.3s';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'scale(1)';
    });
});

// Alert ketika klik kontak
document.querySelectorAll('#contact p').forEach(contact => {
    contact.addEventListener('click', () => {
        alert("Anda akan diarahkan ke kontak!");
    });
});

console.log("Portfolio Rayyan Loaded!");
