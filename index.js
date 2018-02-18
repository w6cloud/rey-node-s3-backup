const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const tar = require('tar-stream')
const tarfs = require('tar-fs')

const config = require('./config')

var date = new Date()
var today = [date.getFullYear(), ('0' + (date.getMonth() + 1)).slice(-2), ('0' + date.getDate()).slice(-2)].join('-')

_.forEach(config.websites, function (conf, website) {
  conf = _.defaults(conf, {dirs: {}, dbs: {}})
  var backupFileName = website + '_' + today + '.tar'
  var backupFilePath = path.join(config.tmpFolder, backupFileName)
  var backupFileStream = fs.createWriteStream(backupFilePath)
  var pack = tar.pack()
  if (conf.dirs) {
    pack.entry({name: 'dirs', type: 'directory'})
    _.forEach(conf.dirs, function (path, dir) {
      var entry = pack.entry({name: 'dirs/' + dir + '.tar'}, function () {
      })
      tarfs.pack(path).pipe(entry.write)
    })
  }
  if (conf.dbs) {
    pack.entry({name: 'dbs', type: 'directory'})
    _.forEach(conf.dbs, function (dbConf, db) {
      pack.entry({name: 'dbs/' + db + '.sql'}, 'content of file')
    })
  }
  pack.pipe(backupFileStream)
  pack.finalize()
})
