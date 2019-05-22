# Enums
**This module uses the ES modules feature and requires Node v8.15.0+.
Please refer to [Node's documentation](https://nodejs.org/api/esm.html#esm_enabling) to read
more on how to enable this functionality in your environment.**

Provides utility functions to simplify working with enum-like objects.
To consider object to be enum-like it:
- must only contain unique values
- must use either numeric or string values, but not both
- should use uppercase letters with underscores for names

**Example:**
```js
const Enum =
{
    ITEM_ONE : 1,
    ITEM_TWO : 2,
    ITEM_THREE : 3
    // ...
};
```

## Installation
```
npm i @calmdownval/enums
```

## Functions
- `stringify(Enum, value)`  
Returns the key of the enum (string) to which the value corresponds or null if the enum does not contain the value.
- `parse(Enum, str)`  
Returns the value of the best matching member of the enum. Exact match is always preferred. The lookup is *case insensitive*.
- `coerce(Enum, value)`  
Checks if value is a member of the enumeration. If so returns it, otherwise returns null.
- `match(Enum, hint)`  
Similar to coerce, except if hint is a string and is not a member of the enumeration parsing is attempted.


## Example
```js
import * as enums from '@calmdownval/enums';

const Enum =
{
    ITEM_ONE : 1,
    ITEM_TWO : 2
};

// returns "ITEM_ONE"
enums.stringify(Enum, Enum.ITEM_ONE);

// returns 2
enums.parse(Enum, 'TWO');
```

## Testing
Make sure to first install dev dependencies.
```
npm test
```
