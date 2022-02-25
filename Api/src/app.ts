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
// app.use(cors());
// app.use(cors({
//     origin:['http://localhost:30000/'],
//     credentials:true,
//     methods:['GET', 'POST','OPTIONS', 'PUT','DELETE'],
//     allowedHeaders:['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],

// }))
app.use((req:Request, res:Response,next:NextFunction)=>{

    res.header('Access-Control-Allow-Origin','http://localhost:3000');
    res.header('Access-Control-Allow-Credentials','true');
    res.header('Access-Control-Allow-Headers','Origin,X-Request-Width,Content-Type,Accept')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS, PUT ,DELETE');
    next();
})
app.use('/api',routes);

app.use((err:Error,req:Request,res:Response,next:NextFunction) => {
    const status=err.status||500;
    const message=err.message|| err;
    console.error(err);
    return res.status(status).send(message);

})


export default app;

