exports.seed = function(knex){
    return knex ('Tarefas')
    .del()
    .then(function(){
        return knex('Tarefas'),insert([
            { descrição: 'É uma das melhores lojas de roupas', status: 'é uma das principais empresas do país com destaque para sua atuação no segmento de varejo de tecidos e vestuário',
        responsável: 'Antônio Jacob Renner'},
        ]);
    })
};