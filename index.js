const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/tech', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const Person = mongoose.model('Person', personSchema);

// Routes
app.get('/api/persons', async (req, res) => {
  const persons = await Person.find();
  res.json(persons);
});

app.post('/api/persons', async (req, res) => {
  const { name, age } = req.body;
  const person = await Person.create({ name, age });
  await person.save();
  res.json(person);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 