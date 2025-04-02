import express from "express";
import { Sequelize, DataTypes } from "sequelize";

//configuração com o banco
const sequelize = new Sequelize('Biblioteca2025', 'postgres', '1002', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres', 
    define: {
        timestamps: false,
        freezeTableName: true
    }
  });
  //mapeamento model editora
  const User = sequelize.define(
    'editora',
    {
      // Model attributes are defined here
      ideditora: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nomeeditora: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      cnpj:{
        type: DataTypes.STRING(20),
        allowNull: false
      },
      endereço:{
        type: DataTypes.TEXT,
        allowNull: true
      },
    },
  );

  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const app = express();
app.use(express.json());

app.get(`/teste`,(req, res)=>{
    res.send(`Teste ok`);
})

app.listen(3000, ()=>{ console.log(`Servidor rodando.`)});
