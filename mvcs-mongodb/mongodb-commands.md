# MongoDB Shell Commands - Product CRUD Operations

These are direct MongoDB shell commands practiced in ByteXL Nimbus workspace (Database: db_43yp6tm7y).

## Collection: products

### 1. CREATE - Insert Products

#### Insert Multiple Products
```javascript
db.products.insertMany([
  {
    name: "Laptop",
    price: 999,
    category: "Electronics"
  },
  {
    name: "T-Shirt",
    price: 25,
    category: "Clothing"
  },
  {
    name: "Book",
    price: 15,
    category: "Books"
  }
]);
```

**Expected Result:**
```javascript
{
  "acknowledged": true,
  insertedIds: {
    "0": "68e21a60c47b1ba69cd09e60",
    "1": "68e21a60c47b1ba69cd09e61",
    "2": "68e21a60c47b1ba69cd09e62"
  }
}
```

### 2. READ - Retrieve Products

#### Find All Products
```javascript
db.products.find();
```

**Expected Result:**
```javascript
[
  {
    "_id": "68e21a60c47b1ba69cd09e60",
    "name": "Laptop",
    "price": 999,
    "category": "Electronics"
  },
  {
    "_id": "68e21a60c47b1ba69cd09e61",
    "name": "T-Shirt",
    "price": 25,
    "category": "Clothing"
  },
  {
    "_id": "68e21a60c47b1ba69cd09e62",
    "name": "Book",
    "price": 15,
    "category": "Books"
  }
]
```

#### Find Specific Product
```javascript
db.products.find({ name: "Laptop" });
```

**Expected Result:**
```javascript
[
  {
    "_id": "68e21a60c47b1ba69cd09e60",
    "name": "Laptop",
    "price": 999,
    "category": "Electronics"
  }
]
```

### 3. UPDATE - Modify Product

#### Update One Product
```javascript
db.products.updateOne(
  { name: "Laptop" },
  { $set: { price: 899 } }
);
```

**Expected Result:**
```javascript
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 1,
  "modifiedCount": 1,
  "upsertedCount": 0
}
```

### 4. DELETE - Remove Product

#### Delete One Product
```javascript
db.products.deleteOne({ name: "T-Shirt" });
```

**Expected Result:**
```javascript
{
  "acknowledged": true,
  "deletedCount": 1
}
```

## Summary of Commands

| Operation | Command | Description |
|-----------|---------|-------------|
| INSERT | `db.products.insertMany([...])` | Add multiple products |
| READ | `db.products.find()` | Retrieve all products |
| READ | `db.products.find({ name: "..." })` | Find specific product |
| UPDATE | `db.products.updateOne({...}, { $set: {...}})` | Update product price |
| DELETE | `db.products.deleteOne({ name: "..." })` | Remove a product |

## Notes
- All commands tested in ByteXL Nimbus MongoDB environment
- Database: `db_43yp6tm7y`
- Collection: `products`
- Each operation returns an acknowledgment object with operation details
