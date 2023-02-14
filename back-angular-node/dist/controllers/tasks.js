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
exports.newUser = exports.getTasks = void 0;
const task_1 = require("../models/task");
/**
 * Funcion getTasks
 */
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield task_1.Task.findAll();
    res.json(listProducts);
});
exports.getTasks = getTasks;
/**
 * Funcion newUser -
 * @param req
 * @param res
 * @returns
 */
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (yield User.findOne({ where: { username: username } }))
        return res.status(400).json({ msg: `Ya se encuentra registrado el usuario ${username}` });
    const hashedPassword = yield bcrypt.hash(password, 10);
    try {
        yield User.create({ username: username, password: hashedPassword });
        res.json({ msg: `El usuario ${username} se regitro correctamente` });
    }
    catch (error) {
        res.status(400).json({ msg: 'Error ', error });
    }
});
exports.newUser = newUser;
