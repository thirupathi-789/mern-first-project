const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {console.log('MongoDb is connected')}
)
.catch((err) => {
    console.log(err)
})

const app = express();

app.listen(3001, () => {
    console.log('Server is running on port 3001!!');
});