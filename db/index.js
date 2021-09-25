import {Sequelize} from 'sequelize'
import path from 'path'
import Product from './product'

import {
  database, dialect, logging,
  username, password, pool,
  host, port, statementTimeout
} from '../config'

const db = new Sequelize(database, username, password, {
  host, port, dialect, logging, pool,
  dialectOptions: {
    // In order to prevent api from hanging, we have to set
    // the threshold for query time to postgres (in ms)
    // This value is disabled by default (statement_timeout = 0)
    statement_timeout: statementTimeout
  },
  define: {} // global options
})

db['Product'] = Product(db)

export default db
