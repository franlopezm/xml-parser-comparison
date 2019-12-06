const xml2js = require('xml2js')
const loadFile = require('./utils/loadFile')

const xml = loadFile("data.xml")

const options = {
	trim: true,
	mergeAttrs: true,
	explicitArray: false
}

const parser = new xml2js.Parser(options)

parser.parseStringPromise(xml)
	.then(({ root: { data } }) => {
		data.frame.forEach(e => {
			console.log('*********************')

			const machinery = e.sets.machinery
			console.log('machinery:')
			console.log(' - attr front:', machinery.front)
			console.log(' - attr nano:', machinery.nano)
			console.log(' - value:', machinery._)

			const feed = e.sets.six.higher.feed
			console.log('feed:')
			console.log(' - attr pen:', feed.pen)
			console.log(' - value:', feed._)

			console.log('*********************')
		})

	})
	.catch(console.error)
