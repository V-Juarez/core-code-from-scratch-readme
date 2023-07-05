const sqlite3 = require('sqlite3')
const path = require('path')

const dbPath = path.resolve(process.cwd(), 'services', 'tasking.sqlite')

const db = new sqlite3.Database(dbPath)

const get = (query, params = []) => {
  return new Promise((res, rej) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        console.log(err);
        return rej(err)
      }
      res(rows)
    })
  })
}

module.exports = {
  get,
}