const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
//InCash Router
const postRouter = require('./routes/Posts')
app.use("/cash", postRouter);

//InKind Router
const inKindRouter = require('./routes/InKind')
app.use("/inkind", inKindRouter);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("listening on port 3001");
    });
});