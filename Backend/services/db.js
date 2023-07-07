const sqlite3 = require('sqlite3')
const path = require('path')

const dbPath = path.resolve(process.cwd(), 'services', 'tasking.sqlite')

const db = new sqlite3.Database(dbPath)

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
    await db.run('CREATE TABLE IF NOT EXISTS tasks(id INTERGER PRIMARY KEY, title TEXT, description TEXT, isdone BOOLEAN, created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)')
    console.log('Tabla tasks Cargadas');
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  get,
  initDB
}
