const mongoose = require('mongoose');

const local = "mongodb+srv://chinhtdph40493:chinh123@cluster0.f5kzsvz.mongodb.net/Lab6";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
