const xmljs = require('xml-js')
const loadFile = require('./utils/loadFile')

const xml = loadFile("data.xml")

const options = {
	ignoreComment: true,
	compact: true,
	trim: true,
	nativeType: true,
	nativeTypeAttributes: true
}

const xmlDoc = xmljs.xml2js(xml, options)

xmlDoc.root.data.frame.forEach(e => {
	console.log('*********************')

	const machinery = e.sets.machinery
	console.log('machinery:')
	console.log(' - attr front:', machinery._attributes.front)
	console.log(' - attr nano:', machinery._attributes.nano)
	console.log(' - value:', machinery._text)

	const feed = e.sets.six.higher.feed
	console.log('feed:')
	console.log(' - attr pen:', feed._attributes.pen)
	console.log(' - value:', feed._text)

	console.log('*********************')
})
