const xml2json = require('xml2json')
const loadFile = require('./utils/loadFile')

const xml = loadFile("data.xml")

const options = {
	object: true,
	coerce: true,
	alternateTextNode: true
}

const xmlDoc = xml2json.toJson(xml, options)

xmlDoc.root.data.frame.forEach(e => {
	console.log('*********************')

	const machinery = e.sets.machinery
	console.log('machinery:')
	console.log(' - attr front:', machinery.front)
	console.log(' - attr nano:', machinery.nano)
	console.log(' - value:', machinery._t)

	const feed = e.sets.six.higher.feed
	console.log('feed:')
	console.log(' - attr pen:', feed.pen)
	console.log(' - value:', feed._t)

	console.log('*********************')
})
