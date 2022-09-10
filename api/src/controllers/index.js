const {User} = require('../db');
const axios = require('axios');

module.exports = {
    loadDB: async (req,res)=>{
        try {
            const users = await User.findAll();
            if(!users.length){
                const {data} = await axios.get('https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos');
                if(!data) return res.json({error:'The initial data does not exist.'});
                await Promise.all(data.map(user=>{
                    return User.create({
                        name:user.nombre,
                        lastname: user.apellido,
                        phone: user.telefono,
                        address: user.direccion
                    })
                }));
                return res.json('Sucess.');
            }
            return res.json('The database is already loaded.');
        } catch (error) {
            console.log(error);
            res.json({error:'Please try again later.'});
        }
    },
    create: async (req,res)=>{
        try {
            const {name,lastname,phone,address} = req.body;
            if(!name || !lastname || !phone || !address){
                return res.json({error:'All data are required.'});
            }
            try {
                await User.create({
                    name,
                    lastname,
                    phone,
                    address
                })   
            } catch (error) {
                return res.json({error:'Invalid data.'})
            }
            res.json('Success.');
        } catch (error) {
            console.log(error);
            res.json({error:'Please try again later.'});
        }
    },
    read: async (req,res)=>{
        try {
            const users = await User.findAll();
            res.json(users.length?users:[]);
        } catch (error) {
            console.log(error);
            res.json({error:'Please try again later.'});
        }
    },
    update: async (req,res)=>{
        try {
            const {id} = req.params;
            const user = await User.findByPk(id);
            if(!user) return res.json({error:`The user ${id} does not exist.`});
            if(!Object.keys(req.body).length>0) return res.json({error:`No data to update.`});
            try {
                await user.update(req.body);
            } catch (error) {
                return res.json({error:`Invalid data.`}); 
            }
            return res.json('Success.');
        } catch (error) {            
            console.log(error);
            res.json({error:'Please try again later.'});
        }
    },
    delete: async (req,res)=>{
        try {
            const {id} = req.params;
            const user = await User.findByPk(id);
            if(!user) return res.json({error:`The user ${id} does not exist.`});
            await user.destroy();
            return res.json('Success.');
        } catch (error) {            
            console.log(error);
            res.json({error:'Please try again later.'});
        }
    },
}