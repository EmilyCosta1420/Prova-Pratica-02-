exports.seed = function(knex){
    return knex('Projeto')
    .del()
    .then(function() {
        return knex('Projeto').insert([
            { nome: 'Renner', descrição:'A empressa de uma das melhores loja de roupas', prazo: 10},
        ]);
    })
};
