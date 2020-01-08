import adminRoutes from './admin.routes';
import v2Routes from './v2.routes';
import v1Routes from './v1.routes';

export default (app) => {
    app.use('/api/admin', adminRoutes);
    app.use('/api/v2', v2Routes);
    app.use('/api/v1', v1Routes);
};
