const {DataTypes} = require('sequelize');

module.exports=(s)=>{
    s.define('User',{
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        timestamps:false
    })
}