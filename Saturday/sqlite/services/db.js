const sqlite3 = require("sqlite3");
const path = require("path");

const dbPath = path.resolve(process.cwd(), "services", "testing.sqlite");
// console.log(dbPath);

const db = new sqlite3.Database(dbPath);

// db.serialize(() => {
//   db.run('CREATE TABLE users (id INT, name TEXT, age INT)')
//   db.run('INSERT INTO users VALUES  (1, "Leonardo", 78)')
//   db.run('SELECT * FROM users', (error) => {
//     if (error) {
//       console.log(error);
//     }
//   })
// })

const get = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        console.log(err)
        return reject(err);
      }
      resolve(rows);
    });
  });
};

const  initDB = async () => {
  try {
    await db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT, age INTEGER)')
    console.log('Tabla users Cargadas')
  } catch (error) {
    throw new Error(error)
  }
}


module.exports = {
  get,
  initDB,
  db
};
