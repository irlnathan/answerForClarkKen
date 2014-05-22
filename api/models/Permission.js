/**
* Permission.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  identity      : 'Permission',
  tableName     : 'perm_master',
  migrate       : 'safe',
  schema        : true,
  // autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes : {

    // id : {
    //   columnName : 'permfk',
    //   type       : 'string',
    //   required   : true,
    //   primaryKey : true,
    //   unique     : true,
    //   uuidv4     : true
    // },

    permid : {
      collection: 'role',
      through: 'roleperm'
      // model: 'roleperm'
      // type       : 'integer',
      // required   : false,
      // primaryKey : true,
      // foreignKey : true,
      // autoPK     : true
    },

    permKey : {
      columnName : 'permkey',
      type       : 'string',
      maxLength  : 50,
      required   : true
    },

    permission : {
      type      : 'string',
      maxLength : 50,
      required  : true
    },

    description : {
      type      : 'string',
      maxLength : 255,
      required  : true
    },

    createdBy : {
      columnName : 'createdby',
      type       : 'integer',
      required   : true
    },

    createdEpoch : {
      columnName : 'epoch_created',
      type       : 'integer',
      required   : true
    },

    updatedEpoch : {
      columnName : 'epoch_updated',
      type       : 'integer'
    },

    enabled : {
      type       : 'boolean',
      required   : false,
      defaultsTo : 1
    },


    /*
     Associations
    */

/*    role : {
      model      : 'role',
      columnName : 'roleid'
    },*/


    /*
     Response Hooks
    */

    toJSON : function() {

      var obj = this.toObject();

      /*remove the int IDs from json results*/
      delete obj.permid;

      return obj;

    }

  }

};