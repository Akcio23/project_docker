import { Client } from 'pg';

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const connectWithRetry = async () => {
    const client = new Client({
        host: "postgres",
        port: 5432,
        user: "postgres",
        password: "postgres",
        database: "mydb",
    });

    for (let i = 0; i < 10; i++) {
        try {
            await client.connect();
            console.log("Conectado ao PostgreSQL");
            return client;
        } catch (err) {
            console.error(`Tentativa ${i + 1} falhou: ${err.message}`);
            await sleep(3000);
        }
    }

    throw new Error("Não foi possível conectar ao PostgreSQL após várias tentativas");
};

const client = await connectWithRetry();

export default client;
