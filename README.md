## TEST XML PARSER
Testing of nodejs memory consumption for a 20KB xml file (parse to json)


| library                                | Memory usage | XML to JSON |
|----------------------------------------|--------------|:-----------:|
| [libxmljs](#libxmljs)                  | `8.6 MB`     | N           |
| [xml2js](#xml2js)                      | `15.1 MB`    | Y           |
| [xml2js](#xml2js)                      | `15.1 MB`    | Y           |
| [xml-js](#xml-js)                      | `12.3 MB`    | Y           |
| [xml2json](#xml2json)                  | `11.4 MB`    | Y           |
| [xml2json](#xml2json)                  | `11.4 MB`    | Y           |
| [fast-xml-parser](#fast-xml-parser)    | `8.9 MB`     | Y           |
| [fast-xml-parser](#fast-xml-parser)    | `8.9 MB`     | Y           |

---

## Example libraries options


### libxmljs
Don't convert the xml to json, you must navigate through the nodes of the xml
- [Documentation link][1]
- [Example link][1.1]

**Options to remove blanks**
```js
const libxmljs = require('libxmljs')

const xmlDoc = libxmljs.parseXml(xml, { blanks: false })
```


### xml2js
- [Documentation link][2]
- [Example link][2.1]

**Default options**
```js
const xml2js = require('xml2js')

const parser = new xml2js.Parser()

parser.parseStringPromise(xml)
	.then(console.log)
	.catch(console.error)
```

**Options added**
```js
const xml2js = require('xml2js')

const parser = new xml2js.Parser({
	trim: true, // Trim the whitespace at the beginning and end of text nodes
	mergeAttrs: true, // Merge attributes and child elements as properties of the parent
	explicitArray: false // An array is created only if there is more than one.
})

parser.parseStringPromise(xml)
	.then(console.log)
	.catch(console.error)
```


### xml-js
- [Documentation link][3]
- [Example link][3.1]

**Default options**
```js
const xmljs = require('xml-js')

const xmlDoc = xmljs.xml2js(xml)
```

**Options added**
```js
const xmljs = require('xml-js')

const xmlDoc = xmljs.xml2js(xml, {
	ignoreComment: true,
	compact: true, // Whether to produce detailed object or compact object.
	trim: true, // Whether to trim whitespace characters that may exist before and after the text.
	nativeType: true, // Converting text of numerals or of boolean values to native type
	nativeTypeAttributes: true // Converting text of numerals or of boolean values to native type
})
```


### xml2json
- [Documentation link][4]
- [Example link][4.1]

**Default options**
```js
const xml2json = require('xml2json')

const xmlDoc = xml2json.toJson(xml)
```

**Options added**
```js
const xml2json = require('xml2json')

const xmlDoc = xml2json.toJson(xml, {
	object: true, // Returns a Javascript object instead of a JSON string
	coerce: true, // Converting text of numerals or of boolean values to native type
	alternateTextNode: true // Changes the default textNode property from $t to _t
})
```


### fast-xml-parser
- [Documentation link][5]
- [Example link][5.1]

**Default options**
```js
const parser = require('fast-xml-parser')

const xmlDoc = parser.parse(xml)
```

**Options added**
```js
const parser = require('fast-xml-parser')

const xmlDoc = parser.parse(xml, {
	attributeNamePrefix: '_', // Given string to attribute name for identification, default @_
	textNodeName: '_t', // Given string to text node name for identification, default #text
	ignoreAttributes: false, // Ignore attributes to be parsed
	ignoreNameSpace: true, // Remove namespace string from tag and attribute names
	parseAttributeValue: true // Parse the value of an attribute to float, integer, or boolean
})
```

[1]: https://www.npmjs.com/package/libxmljs
[1.1]: https://github.com/franlopezm/xml-parser-comparison/blob/master/libxmljs.js
[2]: https://www.npmjs.com/package/xml2js
[2.1]: https://github.com/franlopezm/xml-parser-comparison/blob/master/xml2js.js
[3]: https://www.npmjs.com/package/xml-js
[3.1]: https://github.com/franlopezm/xml-parser-comparison/blob/master/xml-js.js
[4]: https://www.npmjs.com/package/xml2json
[4.1]: https://github.com/franlopezm/xml-parser-comparison/blob/master/xml2json.js
[5]: https://github.com/NaturalIntelligence/fast-xml-parser
[5.1]: https://github.com/franlopezm/xml-parser-comparison/blob/master/fastxmlparser.js
