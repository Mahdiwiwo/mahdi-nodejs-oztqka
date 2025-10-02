const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Mon application Node.js fonctionne !',
    auteur: 'Mahdi',
    timestamp: new Date().toISOString()
  });
});

// Route santé pour Docker
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
  console.log(`📡 URL: http://localhost:${PORT}`);
});
