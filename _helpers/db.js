import mysql from 'mysql2/promise'
import {Sequelize} from 'sequelize'


export const db = {}

intialise();
const intialise = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        port: process.evn.PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    })
    await connection.query(`CREATE DATABASE IF NOT EXITS ${database};`)

    const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {dialect: 'mysql'})

}


