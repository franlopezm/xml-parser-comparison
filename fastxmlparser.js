const parser = require('fast-xml-parser')
const loadFile = require('./utils/loadFile')

const xml = loadFile("data.xml")

const options = {
	attributeNamePrefix: '_',
	textNodeName: '_t',
	ignoreAttributes: false,
	ignoreNameSpace: true,
	parseAttributeValue: true
}

const xmlDoc = parser.parse(xml, options);

xmlDoc.root.data.frame.forEach(e => {
	console.log('*********************')

	const machinery = e.sets.machinery
	console.log('machinery:')
	console.log(' - attr front:', machinery._front)
	console.log(' - attr nano:', machinery._nano)
	console.log(' - value:', machinery._t)

	const feed = e.sets.six.higher.feed
	console.log('feed:')
	console.log(' - attr pen:', feed._pen)
	console.log(' - value:', feed._t)

	console.log('*********************')
})
