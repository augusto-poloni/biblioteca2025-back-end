import { DataTypes } from "sequelize";
import banco from "../banco.js";

//mapeamento da model Funcionario
export default banco.define(
    'funcionario',
    {
        // Model attributes are defined here
        idfuncionario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nomefuncionario: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        salario: {
            type: DataTypes.DECIMAL(11,2),
            allowNull: true,
            defaultValue: 0
        },        
        contratacao: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        demissao: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        token: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        senha: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }
);