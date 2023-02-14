import { Request, Response } from 'express';
import { Task } from '../models/task';

/**
 * Funcion getTasks
 */
export const getTasks = async (req: Request, res: Response) => {
    const { idUser } = req.body;
    res.json(await Task.findAll({ where: { idUser: idUser } }))
}

/**
 * Funcion newTask -
 * @param req 
 * @param res 
 * @returns 
 */
export const newTask = async (req: Request, res: Response) => {
    const { description, idUser } = req.body;
    try {
        console.log(description + ':' + idUser)
        await Task.create({ description: description, idUser: idUser });
        res.json({ msg: `La tarea se registro correctamente` })
    } catch (error) {
        res.status(400).json({ msg: 'Error ', error })
    }
}

/**
 * Funcion upTask -
 * @param req 
 * @param res 
 */
export const upTask = async (req: Request, res: Response) => {
    const { description, id } = req.body;
    try {
        await Task.update({description: description}, { where: { id: id } })
        res.json({ msg: `La tarea se actualizo correctamente` })
    } catch (error) {
        res.status(400).json({ msg: 'Error ', error })
    }
};

/**
 * Funcion delTask -
 * @param req 
 * @param res 
 */
export const delTask = async (req: Request, res: Response) => {
    const { id } = req.query;
    try {
        await Task.destroy({ where: { id: id } })
        res.json({ msg: `La tarea se elimino correctamente` })
    } catch (error) {
        res.status(400).json({ msg: 'Error ', error })
    }
};