let navLinks = document.querySelectorAll("nav ul li a");

document.addEventListener("scroll", () => {
    /* scrollValue allow us to know where we are in the page (y chart) */

    let scrollValue = window.scrollY + 10;

    navLinks.forEach(link => {
        /* this function estabilishes the position in the section and makes the hover active or inactive in the 4 links */

        let section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollValue && section.offsetTop + section.offsetHeight > scrollValue) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

});