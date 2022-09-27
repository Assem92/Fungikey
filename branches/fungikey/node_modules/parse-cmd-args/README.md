# parse-cmd-args

> Returns an object containing the path and flags parsed from process.argv

[![NPM Version](http://img.shields.io/npm/v/parse-cmd-args.svg?style=flat)](https://www.npmjs.org/package/parse-cmd-args)

## Install

```bash
$ npm install parse-cmd-args --save
```

## Usage

```typescript
import { readFileSync } from 'fs';

import parseCmdArgs from 'parse-cmd-args';

const args = parseCmdArgs(null, {
  requireUserInput: true
});

if (args.flags['--version'] || args.flags['-v']) {
  process.stdout.write(
    `${JSON.parse(readFileSync('./package.json', 'utf8')).version}\n`
  );
  process.exit();
} else if (args.flags['--help'] || args.flags['-h']) {
  process.stdout.write('Usage: \n');
  process.exit();
}

console.log(args);
```
