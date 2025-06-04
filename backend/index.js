const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const Item = require('./models/Item');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
});

app.put('/items/:id', async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (item) {
    await item.update(req.body);
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item não encontrado' });
  }
});

app.delete('/items/:id', async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (item) {
    await item.destroy();
    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Item não encontrado' });
  }
});

async function start() {
  try {
    await sequelize.sync();
    app.listen(8195, () => {
      console.log('API rodando na porta 8195');
    });
  } catch (err) {
    console.error('Erro ao conectar no banco:', err);
  }
}

start();
