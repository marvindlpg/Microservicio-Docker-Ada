const Sequelize = require ('sequelize');


const GreetingModel = require('./models/greetings');


const sequelize = new  Sequelize('delconsas_ada-test', 'delconsas_admin25', 'Proceso2025$' , {
    host: 'www.delconsas.com.co',
    dialect: 'mysql'
});


const Greeting = GreetingModel(sequelize, Sequelize);


sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas Sincronizadas')
})

module.exports = {
 
    Greeting
}