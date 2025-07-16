import express from 'express';
import './utilities/ioc.js';
import { RegisterRoutes } from './build/routes.js';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

RegisterRoutes(app);

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const swaggerFile = join(__dirname, './build/swagger.json');

if (fs.existsSync(swaggerFile)) {
    const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'));

    app.use(
        '/docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument, {
            explorer: true,
            customCss: '.swagger-ui .topbar { display: none }',
            swaggerOptions: {
                docExpansion: 'list',
                filter: true,
                showRequestDuration: true,
            },
        }),
    );

    console.log('Swagger UI initialized at /docs');
} else {
    console.warn(
        'Swagger file not found. API documentation will not be available.',
    );
    console.warn('Run "npm run tsoa" to generate the Swagger file.');
}

app.use(function errorHandler(
    err: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
): express.Response | void {
    if (err instanceof Error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            details: err.message,
        });
    }
    next();
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
    console.log(`API documentation available at http://localhost:${port}/docs`);
});
