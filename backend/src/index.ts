import express from 'express';
import goblalRoutes from './routes/global.routes';
import cors from 'cors';
import { swaggerSpec, swaggerUi } from './doc/swagger';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//usar rutas globales
app.use('/api', goblalRoutes);
//usar documentacion de swagger
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Server swagger running on http://localhost:${PORT}/doc`);
});