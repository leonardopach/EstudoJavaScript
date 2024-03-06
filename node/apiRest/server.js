import app from './app';

const porta = 3001;
app.listen(porta, () => {
  console.log(`Esta escutando na porta ${porta}`);
  console.log(`http://localhost:${porta}`);
});
