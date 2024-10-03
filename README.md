# Run

`node ./index.js`

It shows differences beetween json schema validator libs outputs

## Outputs :
- AJV **32 ko minzipped**
- EXODUS **18 ko minzipped**

## Does not outputs (but available if uncommented in code)
- ❌ is-my-json-valid **8 ko minzipped**
  - 👉 Does not validate anyOf even with greedy: true.

- ❌ @cfworker/json-schema **6 ko minzipped**
  - 👉 Does not return the missing required property, in error object. + not enough options.

- ❌ @hyperjump/json-schema **12 ko minzipped**
  - 👉 No errors are describe in output (only valid: true or false).

- ❌ jsonschema **7.5 ko minzipped**
  - 👉 Output is too complex and verbose.

- ❌ dvj **7 ko minzipped**
  - 👉 allErrors option is unavailable, and custom error handler from docs, does not work.

- ❌ jema
  - 👉 Does not handle nodejs.