import { Client } from 'pg';

const client = new Client({
    host: "postgres",  
    port: 8194,
    user: "postgres",
    password: "postgres",
    database: "mydb",
});

client.connect()
    .then(() => console.log('Conectado ao PostgreSQL'))
    .catch(err => console.error('Erro de conexão', err));

export default client;
