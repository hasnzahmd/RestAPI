import { getUserBySessionToken } from '../db/users';
import express from 'express';
import {get, merge} from 'lodash';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['USER-AUTH'];

        if(!sessionToken)  throw new Error('No user authentication token provided');

        const existingUser = await getUserBySessionToken(sessionToken);

        if(!existingUser)  throw new Error(`Invalid or expired user authentication token`);

        merge(req, {identity: existingUser});

        return next();

    } catch (error) {
        console.log(error);
        return res.status(400);
    }
}