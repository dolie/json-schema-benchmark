import schema from './schema.js'
import Ajv from 'ajv'
// import { Validator as Vcfw } from '@cfworker/json-schema';
import { validator as vexo } from '@exodus/schemasafe'
// import { registerSchema, validate as vhyp, InvalidSchemaError } from "@hyperjump/json-schema/draft-2020-12";
// import { Validator as Vjs} from 'jsonschema';
// import djv from 'djv';
// import vimjv from 'is-my-json-valid'

const data = {
/*   phones: [{
    type: 'MOBILE',
  }], */
  address: {
  },
  last_name: 2,
}

// ajv 32ko minzipped
console.log('Ajv')
const ajv = new Ajv({allErrors: true}) // options can be passed, e.g. {allErrors: true}
const v0 = ajv.compile(schema)
const valid = v0(data)
if (!valid) console.log(v0.errors.length, v0.errors)

// @exodus/schemasafe 18.3ko minzipped
console.log('Exodus')
const v2 = vexo(schema, { allErrors: true, includeErrors: true })
const r2 = v2(data)
if (!r2) {
  console.log(v2.errors.length, v2.errors)
}

// ❌ is-my-json-valid 8.2ko minzipped
// 👉 does not validate anyOf even with greedy: true
/*
console.log('Is-my-json-valid')
const v5 = vimjv(schema, { verbose: true, greedy: true, greedyType: true })
v5(data)
console.log(v5.errors.length, v5.errors)
*/


// ❌ @cfworker/json-schema
// 👉 Does not return the missing required property, in error object. + not enough options.
/*
console.log('CFWorker')
const v1 = new Vcfw(schema, '7', false)
const r1 = v1.validate(data)
if (!r1.valid) {
   console.log(r1.errors.length, r1.errors)
}
*/
  

// ❌ @hyperjump/json-schema
// 👉 no errors are describe in output (only valid: true or false)
/*
console.log('Hyperjump')
registerSchema(schema, 'https://example.com/main', 'https://json-schema.org/draft/2020-12/schema')
const r3 = await vhyp('https://example.com/main', data)
if (!r3.valid) {
  console.log(r3.errors)
}
*/

// ❌ jsonschema
// 👉 Output is too complex and verbose
/*
console.log('Jsonschema')
const v4 = new Vjs();
console.log(v4.validate(data, schema).errors);
*/

// ❌ dvj
// 👉 allErrors option is unavailable, and custom error handler from docs, does not work.
/*
console.log('Dvj')
const env = new djv();
// const env = new djv({
//  errorHandler(type) {
//    return `errors.push({
//      type: '${type}',
//      schema: '${this.schema[this.schema.length - 1]}',
//      data: '${this.data[this.data.length - 1]}'
//    });`;
//    }
//  });

env.addSchema('test', schema);
console.log(env.validate('test', data));
*/
