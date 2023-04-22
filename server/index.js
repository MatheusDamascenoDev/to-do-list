import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import path from 'path';
import cors from 'cors';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => {
    console.log('connected to db');
  }).catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/web/build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/web/build/index.html')));

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🔥Server started on http://localhost:${port}`));