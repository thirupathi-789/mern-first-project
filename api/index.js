const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const userRoutes = require('./routes/user.routes.js');
const authRoutes = require('./routes/auth.route.js')

mongoose.connect(process.env.MONGO).then(
    () => {console.log('MongoDb is connected')}
)
.catch((err) => {
    console.log(err)
})

const app = express();

app.use(express.json());

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
})
})

app.listen(3002, () => {
    console.log('Server is running on port 3002!!');
});