# Old Icelandic Zoega

Old Icelandic dictionary for Node.js. From *"A Concise Dictionary of Old Icelandic"* by Geir Zoëga.

The dictionary consists of 29 000+ Old Icelandic words with English translations.

Related projects:
- [Old Icelandic Dictionary Website (in Next.js)](https://github.com/stscoundrel/old-icelandic-zoega-next).
- [Old Icelandic Dictionary Abbreviations](https://github.com/stscoundrel/old-icelandic-zoega-abbreviations).

### Install

`yarn add old-icelandic-zoega`

Or just copy json source file from `/json` folder in source.


### Use JSON files programmatically

The project provides a getter for the data. You can use it in your script to populate your own database or otherwise use the data.

##### Default dictionary with HTML formatting.

```javascript
const { getDictionary } = require('old-icelandic-zoega')

/**
 * Whole dictionary as array.
 * Contains <strong> and <i> HTML tags
 * to match the layout of the printed book.
 */
const dictionary = getDictionary()


// Get words starting with letter A
const aWords = dictionary.filter((entry) => entry.word.charAt(0) === 'a')

console.log(aWords)

```

##### Version without any markup.

```javascript
const { getNoMarkupDictionary } = require('old-icelandic-zoega')

// Same array, but no formatting with HTML tags.
const dictionary = getNoMarkupDictionary()

// Get words starting with letter B
const bWords = dictionary.filter((entry) => entry.word.charAt(0) === 'b')

console.log(bWords)

```

Individual words are returned in format of:

```javascript
{
    word: String
    definitions: [String]
}
```


### About "A Concise Dictionary of Old Icelandic"

"A Concise Dictionary of Old Icelandic" dictionary was published in 1910 by Geir Zoëga, which leads to there being many public domain versions of the book available. Zoëgas attempt was to made easier-to-approach version of the more full [Cleasby - Vigfusson dictionary](https://github.com/stscoundrel/cleasby-vigfusson-dictionary), specifically for beginners and those interested in Old Icelandic prose writing.
