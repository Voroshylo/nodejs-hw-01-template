import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    fs.writeFile(PATH_DB, '[]');
  } catch (error) {
    console.error('Failed to remove all contacts', error);
    throw error;
  }
};

removeAllContacts();
