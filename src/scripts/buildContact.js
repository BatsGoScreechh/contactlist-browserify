const buildContactObject = (first, last, phone, address) => {
    return {
      first: first,
      last: last,
      phone: phone,
      address: address
    };
  }

  export default buildContactObject;