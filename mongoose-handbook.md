# schema types :
* String
* Number
* Date
* Buffer
* Boolean
* Mixed
* ObjectId
* Array
* Decimal128
* Map
* Schema

# schema options :
* required: boolean or function, if true adds a required validator for this property
* default: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
* select: boolean, specifies default projections for queries
* validate: function, adds a validator function for this property
* get: function, defines a custom getter for this property using Object.defineProperty().
* set: function, defines a custom setter for this property using Object.defineProperty().
* alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
* immutable: boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.
* transform: function, Mongoose calls this function when you call Document#toJSON() function, including when you JSON.stringify() a document.

- based on : https://mongoosejs.com/docs/schematypes.html#what-is-a-schema-type