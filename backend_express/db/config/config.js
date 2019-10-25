module.exports = {
    development: {
      storage: "./db/myDB.sqlite",
      dialect: "sqlite",
      logging: console.log
    },
    test: {
      storage: "./db/myDB.sqlite",
      dialect: "sqlite"
    },
    production: {
      storage: "./db/myDB.sqlite",
      dialect: "sqlite"
    }
}