const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Tarefas {
  static async criarTarefas(Tarefas) {
    try {
      const [id] = await database('Tarefas').insert(Tarefas);
      console.log('Tarefas criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar Tarefas:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarTarefas(id, Tarefas) {
    try {
      const result = await database('Tarefas').where({ id }).update(Tarefas);
      console.log('Tarefas atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar Tarefas:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterTarefas(id) {
    try {
      const autor = await database('Tarefas').where({ id }).first();
      console.log('Tarefas encontrado:', Tarefas);
    } catch (error) {
      console.error('Erro ao obter Tarefas:', error);
    } finally {
      database.destroy();
    }
  }

  static async deleteTarefas(id) {
    try {
      const result = await database('Tarefas').where({ id }).del();
      console.log('Tarefas deletado:', result);
    } catch (error) {
      console.error('Erro ao deletar Tarefa:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Tarefas;