import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './lib/dbConnect';
import projectsRouter from './routes/projects.js'; 
import path from 'path';

dotenv.config();

const app = express();

// Connect to the database
connectDB().catch(err => {
  console.error('Database connection error:', err);
});

app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

// Use routes
app.use('/api/projects', projectsRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch(err => console.error('Database connection error:', err));


