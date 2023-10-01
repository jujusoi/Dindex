const path = require('path');
const express = require('express');
const session = require('express-session');
const exprhb = require('express-handlebars');

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 6666;

const sess = {
    secret: 'jnaeiafbknanawe',
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: false,
    store: new sequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

const hbs = exprhb.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});