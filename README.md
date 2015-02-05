# mongodb-connection-string

```shell
npm install mongodb-connection-string
```

## Usage

Create Mongo Connection Strings

```javascript
var mongodbConnectionString = require('mongodb-connection-string');
var connectionString = mongodbConnectionString.mongo({
  hosts: ['server1:27017', 'server2'],  // Array of hosts
  database: 'admin',                    // Name of database
  options: {                            // Options are optional
    replicaSet: 'rs',
    w: 1
  }
}); // --> mongodb://server1,server2/admin?replicaSet=rs&w=1
```

Create Legacy Mongoose Connection Strings using the same options hash

```javascript
var mongodbConnectionString = require('mongodb-connection-string');
var connectionString = mongodbConnectionString.mongooseLegacy({
  hosts: ['server1:27017', 'server2'],  // Array of hosts
  database: 'admin',                    // Name of database
  options: {                            // Options are optional
    replicaSet: 'rs',
    w: 1
  }
}); // --> mongodb://server1:27017/admin,server2?replicaSet=rs&w=1 // Bizarre mongoose format
```

# License
The MIT License (MIT)

Copyright (c) 2015, Andrew Newdigate

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
