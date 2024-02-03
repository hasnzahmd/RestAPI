import { getUserBySessionToken } from '../db/users';
import express from 'express';
import {get, merge} from 'lodash';

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const {id} = req.params;
        const currentUserId = get(req, 'identity._id') as string;

        if(!currentUserId) res.sendStatus(403);
        if(currentUserId.toString() !== id) res.sendStatus(403);

        next();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

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
        return res.sendStatus(400);
    }
}