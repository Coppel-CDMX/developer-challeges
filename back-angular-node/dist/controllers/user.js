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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * Funcion newUser -
 * @param req
 * @param res
 * @returns
 */
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (yield user_1.User.findOne({ where: { username: username } }))
        return res.status(400).json({ msg: `Ya se encuentra registrado el usuario ${username}` });
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield user_1.User.create({ username: username, password: hashedPassword });
        res.json({ msg: `El usuario ${username} se regitro correctamente` });
    }
    catch (error) {
        res.status(400).json({ msg: 'Error ', error });
    }
});
exports.newUser = newUser;
/**
 * Funcion loginUser -
 * @param req
 * @param res
 * @returns
 */
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield user_1.User.findOne({ where: { username: username } });
    if (!user)
        return res.status(400).json({ msg: `El usuario ${username} no se encuentra registrado` });
    if (!(yield bcrypt_1.default.compare(password, user.password)))
        return res.status(400).json({ msg: `Contraseña Incorrecta` });
    res.json([jsonwebtoken_1.default.sign({ username: username }, process.env.SECRET_KEY || 'secret08,,'), [{ "id": user.id, "email": user.username }]]);
});
exports.loginUser = loginUser;
