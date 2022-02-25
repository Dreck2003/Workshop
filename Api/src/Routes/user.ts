import {Request,Response,Router} from 'express';
import { PrismaClient } from '@prisma/client';
// import  express from 'express';

const router=Router();
const prisma=new PrismaClient();



router.get('/', async(req:Request, res:Response) => {
    console.log('PASO POR LA RUTA QUE DEVUELVE TODO')

    const result=await prisma.user.findMany({});
        // console.log(result)
    return res.status(200).json(result);
    
})

router.post('/', async(req:Request, res:Response) => {
    console.log('RUTA PARA CREAR POSTS');

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