/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity      : 'Role',
  tableName     : 'role_master',
  migrate       : 'safe',
  schema        : true,
  // autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

 //  SELECT pm.permission, pm.permkey
	// FROM role_master rm
	// INNER JOIN role_perm rp ON ( rm.roleid = rp.roleid )
	// INNER JOIN perm_master pm ON ( rp.permid = pm.permid )
	// WHERE rm.roleid = 1
	// GROUP By pm.permission

  attributes: {

    // id : {
    //   columnName : 'rolefk',
    //   type       : 'string',
    //   required   : true,
    //   primaryKey : true,
    //   unique     : true,
    //   uuidv4     : true
    // },

    // roleid : {
    //   type       : 'integer',
    //   required   : false,
    //   primaryKey : true,
    //   foreignKey : true,
    //   autoPK     : true
    // },

    name : {
      type      : 'string',
      required  : true,
      maxLength : 100
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

    permissions : {
      collection : 'permssion',
      through: 'roleperm'
    }

  }
};
