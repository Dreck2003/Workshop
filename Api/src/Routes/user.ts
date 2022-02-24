import {Request,Response,Router} from 'express';
import { PrismaClient } from '@prisma/client';
// import  express from 'express';

const router=Router();

const prisma=new PrismaClient();



router.get('/', async(req:Request, res:Response) => {

    const result=await prisma.user.findMany({});

    return res.json(result);
})

router.post('/', async(req:Request, res:Response) => {

    const {name,lastName} =req.body;

    const createUser=await prisma.user.create({
        data:{
            name:name,
            lastName:lastName
        }
    })
    return res.json(createUser);
})

export default router;