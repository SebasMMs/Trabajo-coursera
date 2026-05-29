const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Base de datos simulada
const petsDatabase = [
  { id: 1, name: 'Milo', type: 'Dog', age: '2 años', breed: 'Labrador', description: 'Perro juguetón y cariñoso' },
  { id: 2, name: 'Luna', type: 'Cat', age: '1 año', breed: 'Siamés', description: 'Gata elegante y tranquila' },
  { id: 3, name: 'Coco', type: 'Rabbit', age: '3 años', breed: 'Mini Lop', description: 'Conejo pequeño y adorable' },
  { id: 4, name: 'Max', type: 'Dog', age: '4 años', breed: 'Golden Retriever', description: 'Perro leal y energético' },
  { id: 5, name: 'Bella', type: 'Cat', age: '2 años', breed: 'Persa', description: 'Gata de pelo largo muy hermosa' },
  { id: 6, name: 'Rocky', type: 'Dog', age: '5 años', breed: 'Bulldog', description: 'Perro fuerte y protector' },
];

// GET /api/pets - con filtrado por querystring
app.get('/api/pets', (req, res) => {
  const { search, type } = req.query;

  let filtered = petsDatabase;

  if (search) {
    filtered = filtered.filter(
      (pet) =>
        pet.name.toLowerCase().includes(search.toLowerCase()) ||
        pet.breed.toLowerCase().includes(search.toLowerCase()) ||
        pet.description.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (type) {
    filtered = filtered.filter((pet) => pet.type.toLowerCase() === type.toLowerCase());
  }

  res.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
});

// GET /api/pets/:id - obtener detalle
app.get('/api/pets/:id', (req, res) => {
  const pet = petsDatabase.find((p) => p.id === parseInt(req.params.id));
  if (!pet) {
    return res.status(404).json({ success: false, message: 'Pet not found' });
  }
  res.json({ success: true, data: pet });
});

// GET /api/health - verificar que el servidor está activo
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'PetMatch API is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PetMatch API running on http://localhost:${PORT}`);
  console.log(`Use Ngrok to expose: ngrok http ${PORT}`);
});
