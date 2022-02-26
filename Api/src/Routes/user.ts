import {Request,Response,Router,NextFunction} from 'express';
import { PrismaClient } from '@prisma/client';
// import  express from 'express';

const router=Router();
const prisma=new PrismaClient();

export interface USER{

    name:string,
    lastName:string,
    id:number, 
  createAt:Date,
  updateAt:Date
    
}



router.get('/', async(req:Request, res:Response) => {
    console.log('PASO POR LA RUTA QUE DEVUELVE TODO')

    const result=await prisma.user.findMany({});
        // console.log(result)
    return res.status(200).json(result);
    
})

router.post('/', async(req:Request, res:Response) => {
    console.log('RUTA PARA CREAR POSTS');

    let {name,lastName} =req.body;
    if(!name && !lastName) {
        name=req.body.data.name;
        lastName=req.body.data.lastName;

    }
    
    try{
        const createUser=await prisma.user.create({
            data:{
                name:name,
                lastName:lastName
            }
        })

        console.log('USUARIO CREADO: ',createUser)
        return res.json(createUser);

    }catch(error){
        console.error('Error POST: ',error)
    }
})

router.delete('/', async(req:Request,res:Response,next:NextFunction) => {

    const {id} = req.body;
    console.log('El tipode id: ',typeof id,id)

    try{
        const borrado=await prisma.user.delete({

        where:{
            id:id,
        }})
        
        const result=await prisma.user.findMany({});
        // console.log(result)
        return res.status(200).json(result);
    
    }catch(error){
        console.log('Error: ',error);
        res.status(400).json('not found');
        next();
    }
    

})

export default router;