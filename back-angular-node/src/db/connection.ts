import { Sequelize } from "sequelize";


const sequelize = new Sequelize('railway', 'root', 'akHC2RYT06ooHHXem1Mp', {
    host: 'containers-us-west-134.railway.app',
    port: 5843,
    dialect: 'mysql',   
});

// const sequelize = new Sequelize('reto', 'root', 'adminTareas08,,', {
//     host: 'localhost',
//     port: 3308,
//     dialect: 'mysql',   
// });

export default sequelize;