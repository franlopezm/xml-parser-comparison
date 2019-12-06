const fs = require('fs')
const path = require('path')


module.exports = (fileName) => fs.readFileSync(path.join(__dirname, '../example-data', fileName), 'utf8')
