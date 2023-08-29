const contentDiv = document.querySelector("#content");

const AddContactInfo = () => {
    const header = document.createElement("h1");
    header.textContent = "Contact Kooky";
    contentDiv.append(header);

    const contactMethods = [
        { name: "Instant Transmission", FlavourText: "We'll be right there in an instant.", Number: "142-123" },
        { name: "Flying Nimbus", FlavourText: "Someone pure of heart will come flying down from the sky.", Number: "3-3" },
        { name: "Time Machine", FlavourText: "We're already on the job before you contact us, and it's probably already there.", Number: "335-122" }
    ];

    let contactContent = document.createElement("div");
    contactContent.id = "contact-content";

    for (let method of contactMethods) {
        let newContactCard = document.createElement("div");
        newContactCard.classList.add("contact-item");

        let methodName = method.name;
        let methodText = method.FlavourText;
        let methodNumber = method.Number;

        let nameP = document.createElement("p");
        nameP.textContent = methodName;

        let textP = document.createElement("p");
        textP.textContent = methodText;

        let numP = document.createElement("p");
        numP.textContent = methodNumber;

        newContactCard.append(nameP, textP, numP);
        contactContent.append(newContactCard);
    }
    contentDiv.append(contactContent);
}

export { AddContactInfo };