import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 5000;

// Get the directory name of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the build directory
app.use(express.static(join(__dirname, 'dist')));

// Handle all routes and serve the main index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
