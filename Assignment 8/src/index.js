const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();
//connect to DB
mongoose.connect('mongodb://localhost:27017/Ecom',{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3000, () => console.log('Server running......'));

