import adminRoutes from './admin.routes';

export default (app) => {
    app.use('/api/admin', adminRoutes);
};
