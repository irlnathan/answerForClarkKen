/**
* RolePerm.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {

  identity      : 'RolePerm',
  tableName     : 'role_perm',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes : {

  	foo: {
  		type: 'integer',
  		primaryKey: true
  	},

    roleid : {
    	model: 'role'

      // type       : 'integer',
      // required   : true,
      // primaryKey : true,
      // foreignKey : true
    },

    permid : {
    	model: 'permission'
      // type       : 'integer',
      // required   : true,
      // primaryKey : true,
      // foreignKey : true
    },


    /*
     Associations
    */

    // permissions : {
    //   model      : 'permission',
    //   columnName : 'permid'
    // }

  }

};