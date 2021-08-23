require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const adminRoute = require('./routes/adminRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const { isAuth } = require('./middlewares/verifyToken');
const cookieParser = require('cookie-parser');
const Fawn = require('fawn');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const { db } = require('./config/db');
const cors = require('cors');

/**
 * @params (connection database)
 */
db(mongoose)
mongoose.set('useCreateIndex', true);

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

/**
 * @params (enable fawn on mongoose)
 */
Fawn.init(mongoose)

/**
 * @params (create log file)
 */
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {
        flags: 'a',
    }
);

/**
 * @params {require static folder for image}
 */

app.use(`/uploads`, express.static(path.join(__dirname, 'uploads')));

/**
 * @params (keep trace on log file with morgan)
 */
app.get('env') === 'devlopement' &&
    app.use(morgan('combined', { stream: accessLogStream }));
/**
 *auto update for pack
 */
app.get('/', (req, res)=>{
    res.send('ztaat ta ra ta taaat')
})

/**
 * @params (all routes)
 */
app.use('/api', adminRoute);
app.use('/api', authRoute);
app.use('/api', userRoute);

/**
 * @params (check authentication for all routes)
 */
app.use('*', isAuth, (req, res, next) => {
    next();
});

module.exports = app;