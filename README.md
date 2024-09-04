# JavaScript Utility Functions Library

A comprehensive collection of JavaScript util functions I regularly use in my projects. 
This library is modular, allowing you to import only what you need or the entire library.

## Installation

Install via npm:

```bash
npm install js-utils-library
```

## Usage

Import and use individual functions:

```javascript
import { debounce, throttle } from 'js-utils-library';

debounce(() => console.log('Debounced!'), 300);
```

Or import the entire library:

```javascript
import * as utils from 'js-utils-library';

utils.debounce(() => console.log('Debounced!'), 300);
```

## Documentation

### Array Utilities

- `chunkArray`: Splits an array into chunks of a specified size.
- `difference`: Returns the difference between two arrays.
- ...

### String Utilities

- `capitalize`: Capitalizes the first letter of a string.
- `truncateString`: Truncates a string to a specified length.
- ...

### Object Utilities

- `deepClone`: Creates a deep copy of an object.
- `mergeDeep`: Recursively merges two objects.
- ...

## Contributing

Contributions are welcome! Please see our [Contributing Guidelines](./CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
