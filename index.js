require("dotenv").config();
const Express = require("express");
const app = Express();
const dbConnection = require('./db');

app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
});

const controllers = require('./controllers');

app.use(Express.json());

app.use('/user', controllers.userTable);
app.use('/mech', controllers.mechTable);
app.use('/wpn', controllers.wpnTable);

dbConnection.authenticate()
    .then(()=> dbConnection.sync())
    .then(()=>{
        app.listen(process.env.PORT, ()=> {
            console.log(`[Server]: App is listening on ${process.env.PORT}.`);
        });        
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });