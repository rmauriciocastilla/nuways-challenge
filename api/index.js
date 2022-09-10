const dotenv = require('dotenv');
const server = require('./src/app');
const {db} = require('./src/db');

dotenv.config();
const {PORT} = process.env; 

db.sync({force:false}).then(()=>{
    server.listen(PORT,()=>{
        console.log(`Server listening on Port ${PORT}`);
    });
})