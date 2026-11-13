// ROADSTER WEBSITE JAVASCRIPT


// CAR COLOUR CONFIGURATOR

const colourButtons = document.querySelectorAll(".colour-button");

const configCarBody = document.getElementById("configCarBody");

const selectedColour = document.getElementById("selectedColour");

const summaryColour = document.getElementById("summaryColour");


colourButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the selected colour

        const colour = button.dataset.colour;

        const name = button.dataset.name;


        // Change the car's colour

        configCarBody.style.fill = colour;


        // Update the displayed colour name

        selectedColour.textContent = "Selected: " + name;

        summaryColour.textContent = name;


        // Remove active class from all buttons

        colourButtons.forEach(function(item) {

            item.classList.remove("active");

        });


        // Highlight the selected button

        button.classList.add("active");

    });

});


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("show");

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("show");

    });

});
// WEBSITE LOADER

const loader = document.getElementById("loader");

if (loader) {
    window.addEventListener("load", function() {
        loader.classList.add("hide");
    });
}