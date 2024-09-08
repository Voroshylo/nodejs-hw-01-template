import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log('total contacts:', count);
    return count;
  } catch (error) {
    console.error('Failed to count contacts:', error);
  }
};

console.log(await countContacts());
