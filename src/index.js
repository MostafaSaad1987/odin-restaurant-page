import { AddContent } from "./home";
import { AddMenuItems } from "./menu";
import { AddContactInfo } from "./contact";
import './style.css';

CreateButtons();
AddContent();

const contentDiv = document.querySelector("#content");

console.log("Hey! It's me! Goku!");

function CreateButtons() {
    const tabDiv = document.createElement("div");
    tabDiv.id = "tab";

    const homeButton = document.createElement("button");
    homeButton.id = "home-button";
    homeButton.classList.add("current-button");
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.textContent = "Menu";

    const contactButton = document.createElement("button");
    contactButton.id = "contact-button";
    contactButton.textContent = "Contact";

    tabDiv.append(homeButton, menuButton, contactButton);

    document.body.prepend(tabDiv);
}

const homeClick = document.querySelector("#home-button");
const menuClick = document.querySelector("#menu-button");
const contactClick = document.querySelector("#contact-button");

document.body.addEventListener("click", (e) => {
    if (e.target.id == "home-button") {
        contentDiv.innerHTML = "";
        AddContent();
        ToggleButton(homeClick);
    } else if (e.target.id == "menu-button") {
        contentDiv.innerHTML = "";
        AddMenuItems();
        ToggleButton(menuClick);
    } else if (e.target.id == "contact-button") {
        contentDiv.innerHTML = "";
        AddContactInfo();
        ToggleButton(contactClick);
    }
});

function ToggleButton(buttonClicked) {
    homeClick.classList.remove("current-button");
    menuClick.classList.remove("current-button");
    contactClick.classList.remove("current-button");
    buttonClicked.classList.add("current-button");
}