const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Projeto {
  static async criarProjeto(Projeto) {
    try {
      const [id] = await database('Projeto').insert(Projeto);
      console.log('Projeto criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarProjeto(id, Projeto) {
    try {
      const result = await database('Projeto').where({ id }).update(Projeto);
      console.log('Projeto atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar projeto:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterProjeto(id) {
    try {
      const autor = await database('Projeto').where({ id }).first();
      console.log('Projeto encontrado:', Projeto);
    } catch (error) {
      console.error('Erro ao obter projeto:', error);
    } finally {
      database.destroy();
    }
  }

  static async deleteAutor(id) {
    try {
      const result = await database('Projeto').where({ id }).del();
      console.log('Projeto excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir Projeto:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Projeto;