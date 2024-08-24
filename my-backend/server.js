const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

// Inisialisasi aplikasi Express
const app = express();
const port = 5000;

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'user_registration'
});

// Koneksi ke database
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
  console.log('Database connected!');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint untuk menangani pendaftaran
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('Missing required fields');
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Query untuk memasukkan data pengguna
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Error registering user');
      }
      res.status(201).send('User registered successfully!');
    });
  } catch (err) {
    console.error('Error hashing password:', err);
    res.status(500).send('Error registering user');
  }
});

// Mulai server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
