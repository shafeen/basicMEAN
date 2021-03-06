module.exports = {
    name: 'ProtectedRouteController', service: __,
    dependencies: ['settings', 'express', 'UserRouteController']
};

// protected /api routes
// ---------------------
function __(settings, express, UserRouteController) {
    const router = express.Router();

    router.get('/test', (req, res) => {
        res.json({
            message: 'responded via test protected api endpoint'
        })
    });

    router.get('/ping', (req, res) => {
        res.status(200).send('pong!');
    });

    router.use('/user', UserRouteController);

    return router;
}
