// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links=> {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate')
        }
    });
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer  = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.
    scrollHeight);
 }
 document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const json = Object.fromEntries(formData.entries());

        const response = await fetch('https://formspree.io/f/xkggypap', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        });

        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send the message. Please try again later.');
        }
    });