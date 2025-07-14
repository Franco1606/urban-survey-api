import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => res.send('API iniciada'));

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
