module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('alunos', { id: Sequelize.INTEGER });
  },

  down(queryInterface) {
    return queryInterface.dropTable('alunos');
  },
};
