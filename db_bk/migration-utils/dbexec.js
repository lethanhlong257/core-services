import pg from 'pg'
import BPromise from 'bluebird'
import {dialect, username, password, host, port, database} from '../../config'

// Patches submit to debug queries
const Query = pg.Query
const submit = Query.prototype.submit
Query.prototype.submit = function () {
  console.log(this.text)
  submit.apply(this, arguments)
}

// Needs multiArgs because connect invokes cb with 2 arguments.
BPromise.promisifyAll(pg, {multiArgs: true})

/**
 * Connects to postgres and executes a function in a transaction.
 * This is meant to by used by migrations/seeders scripts only.
 * DO NOT use in application code.
 */
export default async (fn) => {
  let client, pool
  try {
    const connectionString = username
      ? `${dialect}://${username}:${password}@${host}:${port}/${database}`
      : `${dialect}://${host}:${port}/${database}`
    pool = new pg.Pool({
      connectionString
    })
    client = await pool.connect()
    await client.query('BEGIN')
    await fn(::client.queryAsync, client)
    await client.query('COMMIT')
  }
  catch (err) {
    await client.query('ROLLBACK')
    throw err
  }
  finally {
    client && client.release()
    pool && pool.end()
  }
}
