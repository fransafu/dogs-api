require('dotenv').config()

const app = require('./app')
const { sequelize } = require('./models')

const PORT = process.env.PORT || 3000

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, err => {
      if (!err) {
        console.error('run server failed. ', err)
        throw err
      }
      console.log('running on port ', PORT)
    })
  })
  .catch(err => {
    console.error('sync database failed. ', err)
    throw err
  })
