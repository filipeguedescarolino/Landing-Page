let navLinks = document.querySelectorAll("nav ul li a");

document.addEventListener("scroll", () => {

    let scrollValue = window.scrollY + 10;

    navLinks.forEach(link => {

        let section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollValue && section.offsetTop + section.offsetHeight > scrollValue) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

});