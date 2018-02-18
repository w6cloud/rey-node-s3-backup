/**
 * Configuration sample
 * Rename this file in config.js and configure the values
 */

var config = {}

// Temporary folder
config.tmpFolder = '/tmp'

// Websites to backup (see below)
config.websites = {}

// The backup of this website will be <year><month><day>-domain.com.tar.gz
config.websites['domain.com'] = {
  // List of directories to backup
  dirs: {
    // This directory will be stored in /dirs/config.tar
    config: '/var/www/domain.com/config',
    // This directory will be stored in /dirs/upload.tar
    uploads: '/var/www/domain.com/uploads'
  },
  // List of databases to backup
  dbs: {
    // The dump of this MySQL database will be stored in /dbs/app/app.sql
    app: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      user: 'user',
      pass: 'pass',
      db: 'app'
    },
    // The dump of this MongoDB database will be stored in /dbs/stats.tar
    stats: {
      type: 'mongo',
      host: 'localhost',
      port: 27017,
      user: 'user',
      pass: 'pass',
      db: 'pass'
    }
  }
}

module.exports = config
