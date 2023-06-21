const Projeto = require('./models/projeto');
const Tarefas = require('./models/tarefas');


const Projeto1 = {
  nome: 'projeto1',
  descrição: 'projeto da empresa',
  prazo: "10 dias"
};

const Projeto2 = {
    nome: 'projeto2',
    descrição: 'projeto',
    prazo: "20 dias"
  };

Projeto.criarProjeto(Projeto1);
Projeto.criarProjeto(Projeto2);
Projeto.deletarProjeto(2);
Projeto.obterProjeto(3);
Projeto.obterProjeto(4);




const Tarefa1 = {
    descrição: 'tarefa1',
    status: 'otimo',
    responsável: "Antonio",
    taf_id: 6
  };
  
  const Tarefa2 = {
    descrição: 'tarefas2 ',
    status: 'perfeito',
    responsável: "Fulano",
    taf_id: 9
    };

    const Tarefa3 = {
        descrição: 'tarefas3 ',
        status: 'legal',
        responsável: "Ciclano",
        taf_id: 7
        };

Tarefas.criarTarefas(Tarefa1);
Tarefas.criarTarefas(Tarefa2);
Tarefas.atualizarTarefas(3, Tarefa3);
Tarefas.deletarTarefas(6);
Tarefas.obterTarefas(1);
Tarefas.obterTarefas(4);

