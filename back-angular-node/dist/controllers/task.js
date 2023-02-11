"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delTask = exports.upTask = exports.newTask = exports.getTasks = void 0;
const task_1 = require("../models/task");
/**
 * Funcion getTasks
 */
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.body;
    res.json(yield task_1.Task.findAll({ where: { idUser: idUser } }));
});
exports.getTasks = getTasks;
/**
 * Funcion newTask -
 * @param req
 * @param res
 * @returns
 */
const newTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, idUser } = req.body;
    try {
        console.log(description + ':' + idUser);
        yield task_1.Task.create({ description: description, idUser: idUser });
        res.json({ msg: `La tarea se registro correctamente` });
    }
    catch (error) {
        res.status(400).json({ msg: 'Error ', error });
    }
});
exports.newTask = newTask;
/**
 * Funcion upTask -
 * @param req
 * @param res
 */
const upTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, id } = req.body;
    try {
        yield task_1.Task.update({ description: description }, { where: { id: id } });
        res.json({ msg: `La tarea se actualizo correctamente` });
    }
    catch (error) {
        res.status(400).json({ msg: 'Error ', error });
    }
});
exports.upTask = upTask;
/**
 * Funcion delTask -
 * @param req
 * @param res
 */
const delTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        yield task_1.Task.destroy({ where: { id: id } });
        res.json({ msg: `La tarea se elimino correctamente` });
    }
    catch (error) {
        res.status(400).json({ msg: 'Error ', error });
    }
});
exports.delTask = delTask;
