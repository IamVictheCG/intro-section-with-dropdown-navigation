let closeMenu = document.querySelector(".close_menu");
let hamburgerMenu = document.querySelector(".hamburger_menu");
let arrowUp = document.querySelectorAll(".up");
let arrowDown = document.querySelectorAll(".down");
let features = document.querySelector("#features");
let company = document.querySelector("#company");
let features_dropDown = document.querySelector("#features_list");
let company_dropDown = document.querySelector("#company_list");
let navbar = document.querySelector(".nav_section");
let viewport = window.innerWidth

console.log(features_dropDown)
features_dropDown.style.cssText = 'display: none !important;'
company_dropDown.style.cssText = 'display: none !important;'


for (let i = 0; i < arrowUp.length; i++) {
    arrowUp[i].style.cssText = "display: none;";
    
}
for (let i = 0; i < arrowDown.length; i++) {
    arrowDown[i].style.cssText = "display: block;";
    
}

handleMobileNavBar()
handleDesktopNavBar()

// console.log(features);
// console.log(arrowUp);
// console.log(arrowDown);

// hamburgerMenu.addEventListener("click", showNavbar);
// closeMenu.addEventListener("click", removeNavbar);
// Uncomment the next line if you want to close the navbar on a click outside the menu
// document.body.addEventListener("click", removeNavbar);
// features.addEventListener("click", showDropDown_1);
// company.addEventListener("click", showDropDown_2);

function handleMobileNavBar() {
    if(viewport <= 600) {
        hamburgerMenu.addEventListener("click", showNavbar);
        closeMenu.addEventListener("click", removeNavbar);
        features.addEventListener("click", showDropDown_1);
        company.addEventListener("click", showDropDown_2);

        function showNavbar() {
            navbar.style.cssText = "display:block;";
            navbar.classList.remove("nav_animate_r");
            navbar.classList.add("nav_animate_s");
        }

        function removeNavbar() {
            navbar.style.cssText = "display:block;";
            navbar.classList.remove("nav_animate_s");
            navbar.classList.add("nav_animate_r");
        }

        function showDropDown_1() {
            if (arrowUp[0].style.cssText == "display: none;") {
                console.log("This content is hidden");
                arrowUp[0].style.display = "block";
                arrowDown[0].style.display = "none";
            
                features_dropDown.style.cssText = "display: block;"
            }
            else {
                arrowUp[0].style.display = "none";
                arrowDown[0].style.display = "block";
                features_dropDown.style.cssText = "display: none;"
            }
        }
        function showDropDown_2() {
            if (arrowUp[1].style.cssText == "display: none;") {
                console.log("This content is hidden");
                arrowUp[1].style.display = "block";
                arrowDown[1].style.display = "none";
            
                company_dropDown.style.cssText = "display: block;"
            }
            else {
                arrowUp[1].style.display = "none";
                arrowDown[1].style.display = "block";

                company_dropDown.style.cssText = "display: none;"
            }
        }
    }
}


function handleDesktopNavBar() {
    let features = document.querySelectorAll(".nav")[0];
    let company = document.querySelectorAll(".nav")[1];

    if(viewport >= 690) {
        features.addEventListener("mouseover", features_showDropDown);
        company.addEventListener("mouseover", company_showDropDown);
        
        
        function features_showDropDown() {
            arrowDown[0].style.display = "none";
            arrowUp[0].style.display = "block";
            features_dropDown.style.cssText = 'display: block;'
            
            features.addEventListener("mouseout", function() {
                arrowDown[0].style.display = "block";
                arrowUp[0].style.display = "none";
                features_dropDown.style.cssText = 'display: none !important;'
            });
        
        }


        function company_showDropDown() {
            arrowDown[1].style.display = "none";
            arrowUp[1].style.display = "block";
            company_dropDown.style.cssText = 'display: block;'
            
            company.addEventListener("mouseout", function() {
                arrowDown[1].style.display = "block";
                arrowUp[1].style.display = "none";
                company_dropDown.style.cssText = 'display: none !important;'
            });
        }
    }
}