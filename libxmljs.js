const libxmljs = require('libxmljs')
const loadFile = require('./utils/loadFile')

const xml = loadFile("data.xml")

const options = {
	blanks: false
}

const xmlDoc = libxmljs.parseXml(xml, options);

const sets = xmlDoc.get('./data').childNodes()

sets.forEach(e => {
	console.log('*********************')

	const machinery = e.get('./sets/machinery')
	console.log('machinery:')
	console.log(' - attr front:', machinery.attr('front').value())
	console.log(' - attr nano:', machinery.attr('nano') ? machinery.attr('nano').value() : undefined)
	console.log(' - value:', machinery.text())

	const feed = e.get('./sets/six/higher/feed')
	console.log('feed:')
	console.log(' - attr pen:', feed.attr('pen').value())
	console.log(' - value:', feed.text())

	console.log('*********************')
})
