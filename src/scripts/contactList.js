import contact from "./contact.js"
import contactCollection from "./contactCollection.js"

const printAllContacts = () => {
    document.querySelector("#contact-list").innerHTML = "";
    contactCollection.contactCollection()
    .then((parsedContacts) => {
        parsedContacts.forEach(contactObject => {
            document.querySelector("#contact-list").innerHTML += contact(contactObject)

        })
    })
}

export default printAllContacts;