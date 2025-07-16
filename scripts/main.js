document.addEventListener('DOMContentLoaded', () => {
    const animated = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });
    animated.forEach(el => observer.observe(el));

    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('ขอบคุณที่ติดต่อเรา!');
            form.reset();
        });
    }
});