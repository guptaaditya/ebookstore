/**
* TestAPI.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userName : {
      type : 'string'
    },
    password : {
      type : 'string'
    },
    salt : {
      type : 'string'
    },
    firstName: {
      type : 'string'
    },
    lastName: {
      type : 'string'
    }
  }
};
