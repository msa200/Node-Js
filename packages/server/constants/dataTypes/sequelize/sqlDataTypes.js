/* global _ */

let DATA_TYPES = require('../dataTypes');

DATA_TYPES = _.omit(DATA_TYPES, [
  DATA_TYPES.UUID.VALUE,
  DATA_TYPES.UUIDV4.VALUE,
  DATA_TYPES.BLOB.VALUE,
  DATA_TYPES.JSONB.VALUE,
  DATA_TYPES.JSON.VALUE,
  DATA_TYPES.ARRAY.VALUE,
  DATA_TYPES.GEOMETRY.VALUE,
  DATA_TYPES.GEOGRAPHY.VALUE,
  DATA_TYPES.RANGE.VALUE,
]);

module.exports = { DATA_TYPES };
