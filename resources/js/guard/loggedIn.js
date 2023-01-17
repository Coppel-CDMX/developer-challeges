import moment from 'moment';
import jwtDecode from 'jwt-decode';
import { _TOKEN } from '../config';

export default (to, from, next) => {
    const isLogin = to.name === 'login';

    try {
        const token = jwtDecode(localStorage.getItem(_TOKEN));

        if (moment.unix(token.exp) < moment()) {
            throw new Error('Token expired');
        }

        (isLogin)
            ? next('/')
            : next();
    } catch (error) {
        localStorage.removeItem(_TOKEN);
        const loginpath = window.location.pathname;

        isLogin
            ? next()
            : next({
                name: 'login',
                query: {
                    from: loginpath
                }
            });
    }
};
