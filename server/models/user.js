const mongoose = require('mongoose');

let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURL);

let userSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: String,
  email: String,
  lastLogin: {
    type: Date,
    default: Date.now()
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: Date
});

taskSchema.pre('update', function(next) {
  this.findOne({
      id: this._conditions.id
    })
    .then(value => {
      this.updateOne({
          id: this._conditions.id
        }, {
          updatedAt: Date.now(),
          updatedAt: Date.now(),
        })
        .then(() => {
          next();
        })
        .catch(reason => {
          console.log(reason);
        });
    })
    .catch(reason => {
      console.log(reason);
    })
})
