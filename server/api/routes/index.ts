import adminRoutes from './admin.routes';
import v2Routes from './v2.routes';

export default (app) => {
    app.use('/api/admin', adminRoutes);
    app.use('/api/v2', v2Routes);
};
