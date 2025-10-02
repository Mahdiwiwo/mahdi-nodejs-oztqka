const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Application Node.js déployée avec succès !',
    auteur: 'Mahdi',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    service: 'mahdi-nodejs-app',
    port: PORT
  });
});

app.post('/api/deploy/:token', (req, res) => {
  const { token } = req.params;
  
  if (token === 'N35rveNqYdbd0eM5W9puZ') {
    console.log(`✅ Déploiement déclenché sur le port ${PORT}`);
    res.json({
      success: true,
      message: `Déploiement réussi sur le port ${PORT}`,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(403).json({ error: 'Token invalide' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎯 Serveur Node.js démarré sur le port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});
