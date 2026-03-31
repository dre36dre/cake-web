import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express, { Request, Response } from 'express';
import { join } from 'path';

import { AppServerModule } from './main.server';

const app = express();
const port = process.env.PORT || 4000;

// Configura o motor de renderização do Angular Universal
app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
app.set('view engine', 'html');
app.set('views', join(process.cwd(), 'dist/browser'));

// Todas as rotas são tratadas pelo Angular
app.get(/.*/, (req: Request, res: Response) => {
  res.render('index', {
    req,
    providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }]
  });
});

// Inicializa o servidor
const server = app.listen(port, () => {
  console.log(`Angular Universal rodando na porta ${port}`);
});

// Captura erros corretamente
server.on('error', (err: Error) => {
  console.error('Erro ao iniciar servidor:', err);
});