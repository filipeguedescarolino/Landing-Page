let toggleNavElement = document.querySelector(".toggle-nav");
let navLeft = document.querySelector(".nav-left");
let body = document.querySelector("body");

const sections = document.querySelectorAll("section");

const navItemContainer = document.querySelector("#left-nav-item-container");

function createNav() {
    // Create Nav item dynamically
    let linkHTML = "";
    sections.forEach((section) => {
        linkHTML += `
        <ul class="nav-left-bar">
            <li class="nav-left-item">
                <a href="#${section.id}" class="nav-left-link">
                    <i class="fas ${section.dataset.icon}"></i>
                    <span class="link-text"> 
                        ${section.dataset.title}
                    </span>
                </a>
            </li>
        </ul>
        `;
    });
    // Adding the dynamically created Nav items inside Nav item container div
    navItemContainer.innerHTML = linkHTML;
}

function init() {
    // Accessing the NavLinks here instead of at the top because Nav links <a> is created only
    // after createNav() method is invoked
    let navLinks = document.querySelectorAll("nav ul li a");

    toggleNavElement.addEventListener("click", () => {
        navLeft.classList.toggle("expanded-nav");
    });

    document.addEventListener("scroll", () => {
        /* scrollValue allow us to know where we are in the page (y chart) */

        let scrollValue = window.scrollY + 10;

        navLinks.forEach((link) => {
            /* this function estabilishes the position in the section and makes the hover active or inactive in the 4 links */

            let section = document.querySelector(link.hash);
            if (
                section.offsetTop <= scrollValue &&
                section.offsetTop + section.offsetHeight > scrollValue
            ) {
                link.classList.add("active");
                section.classList.add("active-section");
            } else {
                link.classList.remove("active");
                section.classList.remove("active-section");
            }
        });

        body.addEventListener("click", () => {
            navLeft.classList.remove("expanded-nav");
        });

        navLeft.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });
}

// After the DOM is fully loaded and parsed
window.addEventListener("DOMContentLoaded", (event) => {
    // Building nav dynamically
    createNav();

    // Start rest of the process
    init();
});