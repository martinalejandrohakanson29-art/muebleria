const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos del directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir index.html para cualquier otra ruta (Single Page Application friendly)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado correctamente.`);
  console.log(`Local: http://localhost:${PORT}`);
  console.log(`Puerto asignado: ${PORT}`);
});
