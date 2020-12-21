const { getDictionary, getNoMarkupDictionary } = require('../index.js')

describe('Dictionary: with formatting', () => {
  test('Returns dictionary in array format', () => {
    const result = getDictionary()

    expect(Array.isArray(result)).toBeTruthy()
  })

  test('Dictionary contains expected content', () => {
    const result = getDictionary()

    expect(result[14].word).toBe('áblásning')
    expect(result[14].definitions[1]).toBe('1) <i>breathing upon</i> (með elds á.);')

    expect(result[25000].word).toBe('traust')
    expect(result[25000].definitions[1]).toBe('1) <i>help, protection, support</i> (hingat em ek kominn at sœkja heilræði at þér ok t.); ek hefi lítil t. undir mér, <i>small power, authority</i>;')
  })

  test('Dictionary contains 29 951 words', () => {
    const result = getDictionary()

    expect(result.length).toBe(29951)
  })

  test('Dictionary words are returned in correct object format', () => {
    const result = getDictionary()

    for (let i = 0; i < result.length; i += 1) {
      expect(result[i]).toHaveProperty('word')
      expect(result[i]).toHaveProperty('definitions')
    }
  })

  test('Dictionary entries are alphabetically sorted', () => {
    const maybeUnsorted = getDictionary()

    const sortedDictionry = [...maybeUnsorted].sort((a, b) => a.word.localeCompare(b.word))

    expect(maybeUnsorted).toEqual(sortedDictionry)
  })

  test('Dictionary entries do not start with dash (-)', () => {
    const dictionary = getDictionary()

    let hasDashStarts = false

    dictionary.forEach((entry) => {
      if (entry.word.charAt(0) === '-') {
        hasDashStarts = true
      }
    })

    expect(hasDashStarts).toBeFalsy()
  })
})

describe('Dictionary: without formatting', () => {
  test('Returns dictionary in array format', () => {
    const result = getNoMarkupDictionary()

    expect(Array.isArray(result)).toBeTruthy()
  })

  test('Dictionary contains expected content', () => {
    const result = getNoMarkupDictionary()

    expect(result[14].word).toBe('áblásning')
    expect(result[14].definitions[1]).toBe('1) breathing upon (með elds á.);')

    expect(result[25000].word).toBe('traust')
    expect(result[25000].definitions[1]).toBe('1) help, protection, support (hingat em ek kominn at sœkja heilræði at þér ok t.); ek hefi lítil t. undir mér, small power, authority;')
  })

  test('Dictionary entries do not contain HTML markup.', () => {
    const dictionary = getNoMarkupDictionary()

    const html = ['<strong>', '</strong', '<i>', '</i>']

    let hasHTML = false

    dictionary.forEach((entry) => {
      html.forEach((element) => {
        if (entry.word.includes(element)) {
          hasHTML = true
        }

        entry.definitions.forEach((definition) => {
          if (definition.includes(element)) {
            hasHTML = true
          }
        })
      })
    })

    expect(hasHTML).toBeFalsy()
  })

  test('Dictionary contains 29 951 words', () => {
    const result = getNoMarkupDictionary()

    expect(result.length).toBe(29951)
  })

  test('Dictionary words are returned in correct object format', () => {
    const result = getDictionary()

    for (let i = 0; i < result.length; i += 1) {
      expect(result[i]).toHaveProperty('word')
      expect(result[i]).toHaveProperty('definitions')
    }
  })

  test('Dictionary entries are alphabetically sorted', () => {
    const maybeUnsorted = getNoMarkupDictionary()

    const sortedDictionry = [...maybeUnsorted].sort((a, b) => a.word.localeCompare(b.word))

    expect(maybeUnsorted).toEqual(sortedDictionry)
  })

  test('Dictionary entries do not start with dash (-)', () => {
    const dictionary = getNoMarkupDictionary()

    let hasDashStarts = false

    dictionary.forEach((entry) => {
      if (entry.word.charAt(0) === '-') {
        hasDashStarts = true
      }
    })

    expect(hasDashStarts).toBeFalsy()
  })
})
