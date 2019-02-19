const contact = (contactObject) => {
    return `<div>
    <h3>${contactObject.first} ${contactObject.last}</h3>
    <p>${contactObject.phone}</p>
    <p>${contactObject.address}</p>
    </div>`
}

export default contact