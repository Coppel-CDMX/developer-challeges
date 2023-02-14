import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

/**
 * Funcion newUser -
 * @param req 
 * @param res 
 * @returns 
 */
export const newUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if(await User.findOne({ where: { username: username } }))
       return res.status(400).json({ msg: `Ya se encuentra registrado el usuario ${username}` }) 
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ username: username, password: hashedPassword });
        res.json({ msg: `El usuario ${username} se regitro correctamente` })
    } catch (error) {
        res.status(400).json({ msg: 'Error ', error })
    }
}

/**
 * Funcion loginUser -
 * @param req 
 * @param res 
 * @returns 
 */
export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user: any = await User.findOne({ where: { username: username } });
    if(!user)
       return res.status(400).json({msg: `El usuario ${username} no se encuentra registrado`});
    if(!await bcrypt.compare(password, user.password))
        return res.status(400).json({msg: `Contraseña Incorrecta`});
    res.json([jwt.sign({username: username}, process.env.SECRET_KEY || 'secret08,,'), [{"id": user.id, "email": user.username}]]);
}