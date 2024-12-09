const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const connectDB = require('./config/database');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

const app = express();

// Configuración de Handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../public/views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => res.render('home', { title: 'RunwayStyle' }));

module.exports = app;
