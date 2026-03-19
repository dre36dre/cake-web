import express from 'express';
import { AppDataSource } from './data-source';

const app = express();
const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Conexão com PostgreSQL via TypeORM estabelecida!');
    
    app.get('/health', (req, res) => {
      res.send('Backend conectado ao banco 🎂');
    });

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error('❌ Erro ao conectar ao banco:', error));