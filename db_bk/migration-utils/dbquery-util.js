const DATE_FIELDS = ['createdAt', 'updatedAt']

export function buildInsertQueryValue(insertObj = {}, keys = []) {
  const insertValues = keys
    .map((key) => DATE_FIELDS.includes(key) ? 'now()' : `'${insertObj[key]}'`)
    .join(', ')

  return `(${insertValues})`
}

export function buildMultipleInsertQueryValues(insertList = [], keys = []) {
  return insertList
    .map((insertObj) => buildInsertQueryValue(insertObj, keys))
    .join(', ')
}
