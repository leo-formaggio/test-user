import express from 'express';
import router from '../routes/authRoutes';
import authMiddleware from '../middleware/auth';

const app = express();
app.use(express.json());

app.use('/api/auth', router);

app.get('/api/welcome', authMiddleware, (req, res) => {
  res.send('Bem-vindo à rota protegida!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});