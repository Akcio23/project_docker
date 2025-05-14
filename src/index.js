import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes.js';

const app = express();
const PORT = 8195;

// Config para __dirname funcionar com ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Roteamento
app.use(router);

// Servir a página HTML
app.use(express.static(path.join(__dirname, 'public'))); // coloque index.html em /public

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
