import express from "express";
import bodyParser from 'body-parser';
import hitPointRoutes from './routes/hitPointsRoutes.js';

const NAMESPACE = 'OutSchool_API';
const router = express();

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

/** RULES OF THE API */
router.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if ( req.method === 'OPTIONS' ) {
        res.header('Access-Control-Allow-Methods', 'GET PATCH PUT POST DELETE');
        return res.status(200).json({});
    }

    next();
});

/** ROUTES */
router.use('/api/hello', (req, res) => { res.json({message: "Hello World"})});
router.use('/api/hp', hitPointRoutes)

router.use((req, res) => {
    const error = new Error('Not Found');

    return res.status(404).json({
        message: error.message
    });
});

export { router };