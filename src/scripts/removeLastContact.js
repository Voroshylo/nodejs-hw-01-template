import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.splice(-1, 1);
      await writeContacts(contacts);
      console.log('Last contacts has been remove.');
    } else {
      console.log('No conacts to remove');
    }
  } catch (error) {
    console.error('Filed to remove the last contacts:', error);
    throw error;
  }
};

removeLastContact();
