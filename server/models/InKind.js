module.exports = (sequelize, DataType) => {
    const InKind = sequelize.define("InKind", {
        firstName: {
            type: DataType.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
        number: {
            type: DataType.BIGINT,
            allowNull: false,
        },
        address: {
            type: DataType.STRING,
            allowNull: false,
        },
        Type: {
            type: DataType.STRING,
            allowNull: false,
        },
        Quantity: {
            type:DataType.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataType.FLOAT,
            allowNull: false,
        },
        RName: {
            type: DataType.STRING,
            allowNull: false,
        },
        RNum: {
            type: DataType.BIGINT,
            allowNull: false,
        },
        request: {
            type: DataType.BOOLEAN,
            allowNull: false,
        },
        username: {
            type: DataType.STRING,
            allowNull: false,
        },
    });

    return InKind;
};