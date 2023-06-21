exports.up = function (kenx) {
    return kenx.schema
    .createTable('Projetos', function(table) {
        table.increments('id');
        table.stirng('nome').notNullable();
        table.string('descrição');
        table.string('prazo').notNullable();
        
        });
};
exports.down = function(kenx){
    return kenx.schema
    .dropIfExists('Projetos');
};