// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("closeBtn");

menuToggle.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
});

// ================= CATEGORY FILTER =================

const tabButtons = document.querySelectorAll(".tab-btn");

/*
    ALL CATEGORY SECTIONS
*/
const sections = document.querySelectorAll(`
    #section-herbs,
    #section-fruits,
    #section-vegetables,
    #section-seafood,
    #section-meat,
    #section-bakery
`);

tabButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // REMOVE ACTIVE CLASS
        tabButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // ADD ACTIVE CLASS
        button.classList.add("active");

        // GET BUTTON CATEGORY
        const category = button.getAttribute("data-category");

        // ================= SHOW ALL PRODUCTS =================

        if(category === "all"){

            sections.forEach((section) => {
                section.style.display = "block";
            });

        }

        // ================= SHOW SELECTED CATEGORY =================

        else{

            sections.forEach((section) => {

                const sectionCategory =
                    section.getAttribute("data-section");

                if(sectionCategory === category){

                    section.style.display = "block";

                }else{

                    section.style.display = "none";

                }

            });

        }

        // ================= SMOOTH SCROLL =================

        document.getElementById("shop").scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================= DEFAULT LOAD =================

window.addEventListener("DOMContentLoaded", () => {

    sections.forEach((section) => {
        section.style.display = "block";
    });

});