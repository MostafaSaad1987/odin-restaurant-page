import { AddContent } from "./home";
import { AddMenuItems } from "./menu";
import { AddContactInfo } from "./contact";

CreateButtons();
AddContent();

const contentDiv = document.querySelector("#content");

console.log("Hey! It's me! Goku!");

function CreateButtons() {
    const tabDiv = document.createElement("div");
    tabDiv.id = "tab";

    const homeButton = document.createElement("button");
    homeButton.id = "home-button";
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

document.body.addEventListener("click", (e) => {
    if (e.target.id == "home-button") {
        contentDiv.innerHTML = "";
        AddContent();
    } else if (e.target.id == "menu-button") {
        contentDiv.innerHTML = "";
        AddMenuItems();
    } else if (e.target.id == "contact-button") {
        contentDiv.innerHTML = "";
        AddContactInfo();
    }
});