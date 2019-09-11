# difference-hrtime

Package to calculate the difference between two process hrtime

### Install

```bash
npm install --save difference-hrtime
```

### Usage

```javascript
const process = require('process');
const diff = require('difference-hrtime').default;

const start = process.hrtime();

// Do something

const end = process.hrtime();

console.log('Difference', diff(start, end));
// expected output: [number, number]
```

#### License

[MIT](./LICENSE)

#### Author

[Alton Bell Smythe](https://abellsmythe.me)
[Toncho Dev](https://toncho.dev)
