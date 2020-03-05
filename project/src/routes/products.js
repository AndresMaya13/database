const express = require('express');
const router = express.Router();
const connect = require('../database.js');

// GET all products
router.get('/', (req, res) => {
  connect.query('SELECT * FROM products', (err, rows) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// search a Product
router.post('/search', (req, res) => {
  const { search } = req.body;
  let query = '';
  let params = ['%' + search + '%', '%' + search + '%'];
  if (search) {
    query = `name LIKE ? OR code LIKE ? `;
  }
  connect.query('SELECT * FROM products WHERE ' + query, params, (err, rows) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// Get product by Id 
router.get('/:id', (req, res) => {
  const { id } = req.params;
  connect.query('SELECT * FROM products WHERE id = ? ', [id], (err, rows) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE a Product
router.post('/delete', (req, res) => {
  const { id } = req.body;
  connect.query('DELETE FROM products WHERE id = ?', [id], (err) => {
    if (!err) {
      res.json({ status: 'Product Deleted' });
    } else {
      console.log(err);
    }
  });
});

// INSERT a product
router.post('/', (req, res) => {
  const { code, name, description, price } = req.body;
  const product = [code, name, description, price];
  const query = `
    INSERT INTO products (code, name, description, price) VALUES (?,?,?,?)`;
  connect.query(query, product, (err, rows) => {
    if (!err) {
      res.json({ status: 'Product Saved', product });
    } else {
      console.log(err);
    }
  });
});

// Update product by id
router.post('/update', (req, res) => {
  const { code, name, description, price, id } = req.body;
  let params = [code, name, description, price, id];
  console.log(params)
  let query = `
    UPDATE products
    SET code = ?,
    name = ?,
    description = ?,
    price = ?
    WHERE id = ?;
  `;
  connect.query(query, params, (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Product Updated' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
