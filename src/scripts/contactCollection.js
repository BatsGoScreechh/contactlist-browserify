const contactCollection = {
    contactCollection: () => {
        return fetch("http://localhost:8088/contacts")
        .then(contacts => contacts.json())
    },

    createContact: (taskObject) => {
        return fetch("http://localhost:8088/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(taskObject)
        });
      }

}

export default contactCollection