import * as CarModel from './model.js';

export const createCar = async (req, res) => {
    const { name, brand, year } = req.body;
    try {
        const car = await CarModel.createCar(name, brand, year);
        res.status(201).json(car);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar carro', details: err });
    }
};

export const getAllCars = async (req, res) => {
    try {
        const cars = await CarModel.getAllCars();
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar carros', details: err });
    }
};

export const getCarById = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await CarModel.getCarById(id);
        if (car) {
            res.status(200).json(car);
        } else {
            res.status(404).json({ error: 'Carro não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar carro', details: err });
    }
};

export const updateCar = async (req, res) => {
    const { id } = req.params;
    const { name, brand, year } = req.body;
    try {
        const car = await CarModel.updateCar(id, name, brand, year);
        if (car) {
            res.status(200).json(car);
        } else {
            res.status(404).json({ error: 'Carro não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar carro', details: err });
    }
};

export const deleteCar = async (req, res) => {
    const { id } = req.params;
    try {
        await CarModel.deleteCar(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar carro', details: err });
    }
};


