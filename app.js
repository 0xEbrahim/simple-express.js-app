const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const {check} = require('./middlewares/check'); 
const { checkLoggedIn } = require('./middlewares/userLoggedIn')
const groceryRoutes = require('./routes/groceries')
const marketRoute = require('./routes/markets')
const authRoute = require('./routes/auth')

require('./database/db')
const app = express();
const PORT = 3000;


app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret : "XXXXRANDOMSESSIONXXXX",
    resave : false,
    saveUninitialized : false
}));
app.use(check);


// authentication route
app.use('/api/v1/auth',authRoute)

// logged in middleware
app.use(checkLoggedIn)

app.use('/api/v1/groc',groceryRoutes);
app.use('/api/v1/markets', marketRoute);

console.log()


app.listen(PORT , () => {
    console.log(`Listenting to port ${PORT}`);
});