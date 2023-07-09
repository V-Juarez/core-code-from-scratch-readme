const sqlite3 = require('sqlite3')
const path = require('path')

const dbPath = path.resolve(process.cwd(), 'db', 'tasking.sqlite')

const db = new sqlite3.Database(dbPath)

// post
const run = (query, params = []) => {
  return new Promise((res, rej) => {
    db.run(query, params, function (error) {
      if (error) {
        return rej(error)
      }
      return res({
        status: true,
        lastID: this.lastID,
        changes: this.changes
      })
    })
  })
}

const get = (query, params = []) => {
  return new Promise((res, rej) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        console.error(err);
        return rej(err)
      }
      res(rows)
    })
  })
}

const initDB = async () => {
  try {
    await run(`CREATE TABLE IF NOT EXISTS tasks(
      id INTERGER PRIMARY KEY, 
      title TEXT, 
      description TEXT, 
      isdone BOOLEAN, 
      created_at DATETIME DEFAULT 0,
      CURRENT_TIMESTAMP NOT NULL)`)
    console.log('Tabla tasks Cargadas');
  } catch (error) {
    // throw new Error(error)
    console.log(error);
  }
}

module.exports = {
  get,
  run,
  initDB
}
