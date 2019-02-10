import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
import bodyParser from 'body-parser';

//crear servidor 

const app = express();

//configurar el servidor para usar json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use(cors());
//valida web token valido
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://dev-kcq7ruco.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://graficas',
    issuer: "https://dev-kcq7ruco.auth0.com/",
    algorithms: ['RS256']
});


//revisamos y validamos los scopes 
const checkScopes = jwtAuthz(['read:graficas']);

app.get('/productos', (req, res) => {
    let productos = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets:[
          {
            label:'Popularidad',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
       
    res.json(productos);
});

app.listen(5000, () => {
    console.log("Servidor funcionando");
})