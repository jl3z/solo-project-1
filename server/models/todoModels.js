const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://juliansant:yPpPlnw4JoSNrfCD@cluster0.wucp6r5.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'todolist',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  item: { type: String, required: true },
});

const Items = mongoose.model('items', itemsSchema);

module.exports = Items;
