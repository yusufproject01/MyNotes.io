import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './users/controller.user';
import noteRouter from './notes/controller.note';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route untuk user
app.use('/users', userRouter);
// Route untuk user
app.use('/notes', noteRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
