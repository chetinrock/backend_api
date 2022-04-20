const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')
const errorHandler = require('./middlewares/error')
// Load env vars
dotenv.config({ path: './config/config.env'});
//yeni degisiklik
//omer yeni degisik
//müşteri degisikligi
//urun degisk

//laaaaaaan
// Connect to db

connectDB();

// Route Files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json())

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//Handle unhandled promise rejections

process.on(`undhandledRejection`, (err, promise)=>{
    console.log(`ERROR: ${err.message}`)
})
