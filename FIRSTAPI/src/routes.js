const UserController = require('./controllers/UserController');

module.exports = [
  {
    endpoint: '/',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/produtos',
    method: 'GET',
    handler: UserController.listUsers,
  },
];