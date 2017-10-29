const jwt = require('jsonwebtoken');
const FB = require('fb');
const decrypt = require('../helpers/decryptAES256CTR');



class AuthCtrl {
  static authenticate(req, res, next) {
    FB.options({
      appId: process.env.FB_ID,
      appSecret: process.env.FB_SECRET,
      accessToken: req.header.accessToken
    })

    const fb = new FB(options);
    fb.api('me/', {
      fields: ['id', 'name', 'email']
    }, function(result) {
      if (!result || result.error) {
        console.error(!result ? 'error occurred' : result.error);
        res.status(400).json(!result ? 'error occurred' : result.error);
      }


    })
  }
}

module.exports = AuthCtrl;
