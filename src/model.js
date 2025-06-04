import db from './db.js'

// Criar tabela de carros se não existir
export const createCarTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS cars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    year INT NOT NULL
    );
`;
    await db.query(query);
};

// Funções CRUD
export const createCar = async (name, brand, year) => {
    const result = await db.query('INSERT INTO cars (name, brand, year) VALUES ($1, $2, $3) RETURNING *', [name, brand, year]);
    return result.rows[0];
};

export const getAllCars = async () => {
    const result = await db.query('SELECT * FROM cars');
    return result.rows;
};

export const getCarById = async (id) => {
    const result = await db.query('SELECT * FROM cars WHERE id = $1', [id]);
    return result.rows[0];
};

export const updateCar = async (id, name, brand, year) => {
    const result = await db.query('UPDATE cars SET name = $1, brand = $2, year = $3 WHERE id = $4 RETURNING *', [name, brand, year, id]);
    return result.rows[0];
};

export const deleteCar = async (id) => {
    await db.query('DELETE FROM cars WHERE id = $1', [id]);
};


