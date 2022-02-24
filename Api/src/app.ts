import express,{Application,NextFunction,Request,Response} from 'express';
import config from './lib/config';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';

//Importaciones primarias:
import routes from './Routes/index';


interface Error{
    status:number,
    message:string,

}



const app:Application = express();

app.use(express.urlencoded({ extended: true,limit:'50mb'}));
app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
    origin:config.cors,
    credentials:true,
    methods:['GET', 'POST','OPTIONS', 'PUT','DELETE'],
    allowedHeaders:['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],

}))

app.use((err:Error,req:Request,res:Response,next:NextFunction) => {
    const status=err.status||500;
    const message=err.message|| err;
    console.error(err);
    return res.status(status).send(message);

})



app.get('/', (req:Request, res:Response) => {

    return res.send('Hello typescrpit!')

})

app.use('/api',routes)

export default app;

