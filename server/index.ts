import dotenv from 'dotenv';
import fs from 'fs';
import express from 'express';
import path from 'path';
import { createConnection } from 'typeorm';
import routes from './api/routes/index';
import errorHandlerMiddleware from './api/middlewares/error-handler.middleware';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


createConnection().then(async (connection) => {
    routes(app);

    const staticPath = path.resolve(`${__dirname}/../client/build`);
    app.use(express.static(staticPath));

    app.get('*', (req, res) => {
        res.write(fs.readFileSync(`${__dirname}/../client/build/index.html`));
        res.end();
    });

    app.use(errorHandlerMiddleware);

    const PORT = process.env.PORT || 5001;

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}!`);
    });

}).
    catch(err => console.log(err));
