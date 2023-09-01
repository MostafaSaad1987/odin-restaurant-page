const contentDiv = document.querySelector("#content");
import homeImage from '../src/images/Goku.gif';
import favicon from '../src/images/DBIcon.png';

let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = favicon;

const AddContent = () => {
    const header = document.createElement("h1");
    header.textContent = "Kooky Cook's Cooks";

    const subText = document.createElement("h2");
    subText.classList.add("subtitle");
    subText.textContent = "For all your Saiyan needs.";

    const flavourText = document.createElement("p");
    flavourText.classList.add("small-text-home");
    flavourText.textContent = "This is a wonderful restaurant full of different kinds of food. Everything a Saiyan needs.";

    const gokuImage = document.createElement("img");
    gokuImage.classList.add("goku-eating");
    gokuImage.src = homeImage;

    let homeContent = document.createElement("div");
    homeContent.id = "home-content";

    homeContent.append(header, subText, flavourText, gokuImage);

    homeContent.style.opacity = 0;
    contentDiv.append(homeContent);
    setTimeout(() => {
        homeContent.style.opacity = 1;
    }, 250);
}

export { AddContent };