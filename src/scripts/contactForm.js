import contactCollection from "./contactCollection.js"
import buildContactObject from "./buildContact.js"
import printAllContacts from "./contactList.js";
contactCollection.contactCollection();


const contactForm = () => {
document.querySelector("#save-btn").addEventListener("click", event => {
    const contactToAdd = buildContactObject(
        document.querySelector("#first-name-input").value,
        document.querySelector("#last-name-input").value,
        document.querySelector("#phone-input").value,
        document.querySelector("#address-input").value,

    );
    contactCollection.createContact(contactToAdd).then(() => {
        contactCollection.contactCollection();

    })
    printAllContacts();

})
};

export default contactForm