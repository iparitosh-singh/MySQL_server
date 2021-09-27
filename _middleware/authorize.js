import jwt from 'express-jwt'
import db from '../_helpers/db'


const secret = process.env.JWT_SECRET


const authorize = (roles=[]) => {
    if(typeof roles == 'string'){
        roles = [roles]
    }

    return [
        jwt({secret, algorithms: ['HS256']}),
        async (req, res, next) => {
            const account = await db.Account.findByPk(req.user.id);

            if(!account || (roles.length && !roles.includes(account.roles)))
                return res.status(401).json({ message: 'Unauthorized'})

            req.user.role = account.role
            const refreshTokens = await account.getRefreshToken()
            req.user.ownsToken = token => !!refreshTokens.find(x => x.token === token)
            next()
        }
    ]
}

export default authorize
