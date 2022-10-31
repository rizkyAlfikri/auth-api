const UserHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'users',
    register: async (server, {container}) => {
        const userHandler = new UserHandler(container);
        server.route(routes(userHandler));
    }
}