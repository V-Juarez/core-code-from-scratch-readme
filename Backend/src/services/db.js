const sqlite3 = require('sqlite3')
const path = require('path')

const dbPath = path.resolve(process.cwd(), "src", "db", "tasking.sqlite");

const db = new sqlite3.Database(dbPath)

// post
const run = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(query, params, function (error) {
      if (error) {
        return reject(error)
      }
      return resolve({
        status: true,
        lastID: this.lastID,
        changes: this.changes
      })
    })
  })
}

const get = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        console.error(err);
        return reject(err)
      }
      return resolve(rows)
    })
  })
}

const initDB = async () => {
  try {
    await run(
      `CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY, 
      title TEXT, 
      description TEXT, 
      isdone INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      created_task DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_task DATETIME DEFAULT CURRENT_TIMESTAMP
      )`
    )
    console.log('Tabla tasks Cargadas');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  get,
  run,
  initDB
}
