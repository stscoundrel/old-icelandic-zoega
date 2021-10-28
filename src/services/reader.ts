import fs from 'fs';
import { DictionaryEntry } from '../models';

export const read = (location: string) : DictionaryEntry[] => {
  const content = fs.readFileSync(location);
  const words = JSON.parse(content.toString());

  return words;
};

export default {
  read,
};
