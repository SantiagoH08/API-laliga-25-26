import cors from 'cors';


const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://tu-dominio.com'
];

export const corsMiddleware = ({acceptedOrigins = ACCEPTED_ORIGINS} = {}) => cors({
    origin: (origin,callback)=>{
        if(!origin || acceptedOrigins.includes(origin)){
            return callback(null,true)
        }
        return callback(new Error('Origin not allowed by CORS'));
    }
})   
