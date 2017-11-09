const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const task = require('routes/taskRoute');
const auth = require('routes/authRoute');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/task', task);
app.use('/auth', auth);

app.listen(process.env.PORT || 3000, () => {
  console.log('Hello from port: 3000');
});
