// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });

    // Show Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Blog Post Hover Effects
const blogPosts = document.querySelectorAll('.blog-post');

blogPosts.forEach(post => {
    post.addEventListener('mouseenter', () => {
        post.style.transform = 'scale(1.05)';
        post.style.transition = 'transform 0.3s, box-shadow 0.3s';
        post.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    });
    
    post.addEventListener('mouseleave', () => {
        post.style.transform = 'scale(1)';
        post.style.boxShadow = 'none';
    });
});

// Scroll to Top Functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.innerText = '↑';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.3s;
`;

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.body.appendChild(scrollToTopBtn);

// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        navMenu.style.transition = 'max-height 0.3s ease-in-out';
    });
}
// exports.build = series(scssTask, jsTask);