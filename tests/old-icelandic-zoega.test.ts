import { getDictionary, getNoMarkupDictionary } from '../src';

describe('Dictionary: with formatting', () => {
  test('Returns dictionary in array format', () => {
    const result = getDictionary();

    expect(Array.isArray(result)).toBeTruthy();
  });

  test('Dictionary contains expected content', () => {
    const result = getDictionary();

    expect(result[14].word).toBe('afbindi');
    expect(result[14].definitions[0]).toBe('n. <i>constipation</i>.');

    expect(result[25000].word).toBe('undanhald');
    expect(result[25000].definitions[0]).toBe('n. <i>flight</i>.');
  });

  test('Dictionary contains 29 951 words', () => {
    const result = getDictionary();

    expect(result.length).toBe(29951);
  });

  test('Dictionary words are returned in correct object format', () => {
    const result = getDictionary();

    for (let i = 0; i < result.length; i += 1) {
      expect(result[i]).toHaveProperty('word');
      expect(result[i]).toHaveProperty('definitions');
    }
  });

  test('Dictionary entries do not start with dash (-)', () => {
    const dictionary = getDictionary();

    let hasDashStarts = false;

    dictionary.forEach((entry) => {
      if (entry.word.charAt(0) === '-') {
        hasDashStarts = true;
      }
    });

    expect(hasDashStarts).toBeFalsy();
  });
});

describe('Dictionary: without formatting', () => {
  test('Returns dictionary in array format', () => {
    const result = getNoMarkupDictionary();

    expect(Array.isArray(result)).toBeTruthy();
  });

  test('Dictionary contains expected content', () => {
    const result = getNoMarkupDictionary();

    expect(result[14].word).toBe('afbindi');
    expect(result[14].definitions[0]).toBe('n. constipation.');

    expect(result[25000].word).toBe('undanhald');
    expect(result[25000].definitions[0]).toBe('n. flight.');
  });

  test('Dictionary entries do not contain HTML markup.', () => {
    const dictionary = getNoMarkupDictionary();

    const html = ['<strong>', '</strong', '<i>', '</i>'];

    let hasHTML = false;

    dictionary.forEach((entry) => {
      html.forEach((element) => {
        if (entry.word.includes(element)) {
          hasHTML = true;
        }

        entry.definitions.forEach((definition) => {
          if (definition.includes(element)) {
            hasHTML = true;
          }
        });
      });
    });

    expect(hasHTML).toBeFalsy();
  });

  test('Dictionary contains 29 951 words', () => {
    const result = getNoMarkupDictionary();

    expect(result.length).toBe(29951);
  });

  test('Dictionary words are returned in correct object format', () => {
    const result = getDictionary();

    for (let i = 0; i < result.length; i += 1) {
      expect(result[i]).toHaveProperty('word');
      expect(result[i]).toHaveProperty('definitions');
    }
  });

  test('Dictionary entries do not start with dash (-)', () => {
    const dictionary = getNoMarkupDictionary();

    let hasDashStarts = false;

    dictionary.forEach((entry) => {
      if (entry.word.charAt(0) === '-') {
        hasDashStarts = true;
      }
    });

    expect(hasDashStarts).toBeFalsy();
  });
});
