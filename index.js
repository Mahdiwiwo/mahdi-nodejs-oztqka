const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Application Node.js déployée avec Dokploy !',
    auteur: 'Mahdi',
    status: 'DÉPLOIEMENT RÉUSSI',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check endpoint (OBLIGATOIRE pour Dokploy)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'mahdi-nodejs-app',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Webhook endpoint pour Dokploy
app.post('/api/deploy/:token', (req, res) => {
  const { token } = req.params;
  
  if (token === 'N35rveNqYdbd0eM5W9puZ') {
    console.log('✅ Webhook de déploiement reçu - Déploiement en cours...');
    
    res.json({
      success: true,
      message: 'Déploiement déclenché avec succès',
      deploymentId: `dpl-${Date.now()}`,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(403).json({
      success: false,
      error: 'Token de déploiement invalide'
    });
  }
});

// Démarrer le serveur
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎯 Serveur Node.js démarré sur le port ${PORT}`);
  console.log(`📍 Health check: http://0.0.0.0:${PORT}/health`);
  console.log(`🌐 Webhook: http://0.0.0.0:${PORT}/api/deploy/N35rveNqYdbd0eM5W9puZ`);
});
