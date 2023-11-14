const express = require ('express');
const colors = require ('colors');
const dotenv = require ('dotenv').config();
const errorHandler = require ('./middleware/errorMiddleware'); 
const connectDB = require ('./config/db');
const port = process.env.PORT || 5000;
const cors = require('cors');

connectDB();
//test

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/pedidos', require('./routes/pedidosRoutes'));
app.use('/api/tareas', require('./routes/tareasRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));
app.use('/api/donations', require('./routes/donationRoutes'));
app.use ('/api/items', (req,res) => {
    return res.status(200).json({
        message: 'Nueva funcionalidad agregada'
    });
});


app.use(errorHandler); 

app.listen (port, () => console.log (`Server running on port ${port}`.cyan.underline.bold));