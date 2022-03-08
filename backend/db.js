const mongoose = require('mongoose')

const URI = "mongodb+srv://dbUserA:bruin123@cluster35l.x01ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(
        URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("MongoDB Successfully Connected!")
      );
}

module.exports = connectDB
