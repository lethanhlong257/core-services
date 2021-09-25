export const dialect = 'postgres'

export const username = process.env.DB_USERNAME || null
export const password = process.env.DB_PASSWORD || null
export const host = process.env.DB_HOST || 'localhost'
export const port = process.env.DB_PORT || 5432
export const database = process.env.DB_NAME || 'icommerce'

/**
 * These params are optional
 */
export const logging = process.env.DB_LOGGING == true
// Since the size of Postgresql on test env is t2,
// We need to set the db pool limit to a small number
// https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html
const poolMax = Number(process.env.DB_POOL_MAX) || 10
const poolMin = Number(process.env.DB_POOL_MIN) || 5
const poolIdle = Number(process.env.DB_POOL_IDLE_MS) || 10000
const poolAcquire = Number(process.env.DB_POOL_ACQUIRE_MS) || 60000
const poolEvict = Number(process.env.DB_POOL_EVICT_MS) || 10000

export const statementTimeout = Number(process.env.DB_STATEMENT_TIMEOUT) || 0
export const migrationStorage = 'sequelize'
export const seederStorage = 'sequelize'

export const pool = {
  max: poolMax,
  min: poolMin,
  idle: poolIdle,
  acquire: poolAcquire,
  evict: poolEvict
}

