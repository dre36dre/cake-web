const express = require('express');
const { testConnection } = require('./db');

const app = express();
const PORT = 3000;

app.get('/health', async (req, res) => {
  try {
    await testConnection();
    res.send('Backend está conectado ao banco 🎂');
  } catch {
    res.status(500).send('Erro de conexão com o banco');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});