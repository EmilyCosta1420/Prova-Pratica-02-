exports.up = function(kenx){
return kenx.schema
.createTable('Tarefas', function(table) {
 table.increments('id');;
 table.string('descrição').notNullable();
 table.string('status').notNullable();
 table.string('Responsável').notNullable();
 table.integer('taf_id').unigned();
 table.foreing('taf_id').references('Projeto.id');
  });
};
exports.dowm = function(kenx){
    return kenx.schema
    .dropIfExists('Tarefas')
};

