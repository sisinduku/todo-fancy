module.exports = function(text) {
  var crypto = require('crypto');
  var cipher = crypto.createCipher('aes-256-ctr', process.env.ENCRYPT_SECRET)
  var crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex');
  return crypted;
};
