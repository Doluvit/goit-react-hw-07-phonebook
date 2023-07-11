import axios from 'axios';

async function getContacts() {
  try {
    const response = await axios.get(
      'https://64ad4548b470006a5ec5aad7.mockapi.io/contactsList/contact'
    );
      const contacts = response.data;
      console.log(contacts)
  } catch (error) {
    console.error(error);
  }
}

export default getContacts;

getContacts();