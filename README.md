# **Landing Page**

## this project will be focused in javascript and the main purpose is to apply some javascript functions and build a responsive navbar. 

 *document.addEventListener("scroll", () => {
        
        let scrollValue = window.scrollY + 20;

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
 **this function analyses the position on the y vector value and pinpoints the position of the sections and hovers the content in the navbar. There are 2 conditions in the function and we use the section.offsetTop and section.offsetHeight to determine wether the mouse button is passing in the section. If true, the section is highlithed otherwise it wont.

*function createNav() {
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

    navItemContainer.innerHTML = linkHTML;
    
** this function creates dinamically the navbar. The var "linkHTML" will be filled with the section elements. The "+=" allow us to do the loop 4 times and store the 4 different values in the var. the section.id, section.dataset.icon and section.dataset are defined in the index.html and will create the remaining elements in the navbar.
Then we use the innerHTML, to introduce the new var "linkHTML" into the index.html file.
      
