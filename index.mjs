import defaultExport from '@uniswap/token-lists';
import Ajv from 'ajv';
import addFormats from "ajv-formats"

import * as data from './manifold.tokenlist.json';

var ajv = new Ajv();
  addFormats(ajv);
var valid = ajv.addSchema(defaultExport.schema, 'mySchema').validate('mySchema', data.default);
if (!valid) {
  throw new Error(ajv.errorsText());
}
