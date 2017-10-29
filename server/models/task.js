const mongoose = require('mongoose');

let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOURL);

let taskSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  user: {
    type: String,
    ref: 'User'
  },
  completeDate: Date,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: Date
});

taskSchema.pre('update', function(next) {
  this.findOne({
      _id: this._conditions._id
    })
    .then(value => {
      this.updateOne({
          _id: this._conditions._id
        }, {
          updatedAt: Date.now()
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

module.exports = mongoose.model('Task', taskSchema);
