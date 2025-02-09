module.exports = (sequelize, type) => {
    return sequelize.define('greeting', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        typesGreeting: type.STRING,

    })


}