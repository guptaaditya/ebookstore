/**
 * Auth.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    userId : {
      type : 'string'
    },
    sessid : {
      type : 'string'
    },
    loginTime: {
      type : 'datetime'
    }
  },

  beforeCreate: function (values, cb) {
    User.findOne({where: {userName: values.userName, password: values.password}}).exec(function(err, user) {
      if(err) return cb(err);
      if(!user) return cb(new Error({code: 403, msg: 'Invalid username password'}));
      values.userId  = user.id;
      values.loginTime = +new Date();
      values.sessid = values.loginTime.toString() + user.id
      delete values.userName;
      delete values.password;
      cb();
    });
  }
};
