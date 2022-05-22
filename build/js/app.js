
/*============= SCROLL HADER ========*/
function scrollHeader() {
    const header = document.querySelector('#header');
    if (this.scrollY >= 200) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* ===== MENU MOBILE =======*/
/**
 * If the toggle and nav elements exist, add an event listener to the toggle element that toggles the
 * show class on the nav element, and if the close and nav elements exist, add an event listener to the
 * close element that removes the show class from the nav element.
 * @param toggleID - the ID of the element that will toggle the menu
 * @param closeID - The ID of the element that closes the menu.
 * @param navID - The ID of the nav element
 */
const showMenu = (toggleID, closeID, navID) => {
    const toggle = document.getElementById(toggleID);
    const nav = document.getElementById(navID);
    const close = document.getElementById(closeID);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
    if (close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('show');
        })
    }
}
showMenu('nav-toggle', 'nav-close', 'nav-menu');


/*====== CLOSE REMOVE MOBILE =====*/
/**
 * When a nav link is clicked, remove the active-link class from all nav links, then add the
 * active-link class to the clicked nav link.
 */
const navLinks = document.querySelectorAll('.nav__links');
function linkAction() {
    navLinks.forEach(n => n.classList.remove('active-link'))
    this.classList.add('active-link');
    /*======= REMOVE MOBILE ===== */
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));


/*========== SCROLL ACTIVE LINK ========= */
/**
 * If the scroll position is greater than the top of the section and less than the top of the section
 * plus the height of the section, add the class active-link to the link that has the same href as the
 * section's id.
 */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 500;
        const sectionID = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(' a[href*=' + sectionID + ']').classList.add('active-link');
        } else {
            document.querySelector(' a[href*=' + sectionID + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);
/*======== SCROLL UP ========*/
/**
 * If the user scrolls down 350px, add the class 'show-scroll' to the element with the id 'scroll-up'.
 * If the user scrolls back up, remove the class 'show-scroll' from the element with the id
 * 'scroll-up'.
 */
function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up');

    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }

}
window.addEventListener('scroll', scrollUp);
/*======== SCROLL REVEAL ANIMATION =======*/
const sr = ScrollReveal({
    duration: 2500
})

sr.reveal(`.header`, { origin: 'top', delay: 400 });

const srTwo = ScrollReveal({
    distance: '90px',
    duration: 2500
})
srTwo.reveal(`.home_title`, { delay: 400 });
srTwo.reveal(`.scrolldown`, { origin: 'bottom', delay: 400 });
srTwo.reveal(`.section_title`, { origin: 'top', delay: 200 });
srTwo.reveal(`.about__info`, { origin: 'right', delay: 200 });
srTwo.reveal(`.about__img`, { origin: 'bottom', delay: 400, interval: 200 });
srTwo.reveal(`.cafe`, { origin: 'top', delay: 200 });
srTwo.reveal(`.comida`, { origin: 'bottom', delay: 200 });
srTwo.reveal(`.galeria`, { origin: 'bottom', delay: 200 });
srTwo.reveal(`.info`, { origin: 'left', delay: 400 });
srTwo.reveal(`.pedidos__img`, { origin: 'right', delay: 400 });
srTwo.reveal(`.contact-box`, { origin: 'bottom', delay: 400, interval: 200 });
