import authRoutes from './auth.routes';
import clientRoutes from './client.routes';
import agencyRoutes from './agency.routes';
import eastcodeRoutes from './eastcode.routes';
import userRoutes from './user.routes';
import fileRoutes from './file.routes';
import projectRoutes from './project.routes';
import specificationRoutes from './specification.routes';
import chatRoutes from './chat.routes';

export default (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/clients', clientRoutes);
    app.use('/api/agencies', agencyRoutes);
    app.use('/api/eastcode', eastcodeRoutes);
    app.use('/api/files', fileRoutes);
    app.use('/api/projects', projectRoutes);
    app.use('/api/specification', specificationRoutes);
    app.use('/api/chats', chatRoutes);
};
