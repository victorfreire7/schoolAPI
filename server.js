import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';

app.listen(parseInt(process.env.PORT), () => {
  console.log(`http://localhost:${process.env.PORT}`);
})
