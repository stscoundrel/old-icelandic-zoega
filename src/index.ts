import { read } from './services/reader';
import { DictionaryEntry } from './models';
import { ZOEGA_JSON, NO_MARKUP_JSON } from './constants/paths';

export function getDictionary() : DictionaryEntry[] {
  const words = read(ZOEGA_JSON);

  return words;
}

export function getNoMarkupDictionary() : DictionaryEntry[] {
  const words = read(NO_MARKUP_JSON);

  return words;
}

export default {
  getDictionary,
  getNoMarkupDictionary,
};
