const express = require ('express');
const colors = require ('colors');
const dotenv = require ('dotenv').config();
const errorHandler = require ('./middleware/errorMiddleware'); 
const connectDB = require ('./config/db');
const cors = require ('cors')
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/pedidos', require('./routes/pedidosRoutes'));

app.use(errorHandler); 

app.listen (port, () => console.log (`Server running on port ${port}`.cyan.underline.bold));