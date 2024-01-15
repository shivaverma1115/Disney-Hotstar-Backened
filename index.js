const express = require('express');
const { connection } = require('./config/db.config');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin: '*'
}))

app.get('/', (req, res) => {
    return res.send({
        msg: "this is api base point"
    })
})

const { MovieRouter } = require('./routers/movie.router');
app.use('/movies', MovieRouter);

const port = process.env.PORT;
app.listen(port, async () => {
    try {
        await connection
        console.log('your db is now connected');
    } catch (error) {
        console.log(error);
    }
    console.log(`your app is running at ${port}`)
})