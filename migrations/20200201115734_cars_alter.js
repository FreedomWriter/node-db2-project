exports.up = async function(knex) {
  await knex.schema.alterTable("cars", table => {
    table.integer("sales_id");
    table
      .foreign("sales_id")
      .references("sales_id")
      .inTable("sales");
  });
};

exports.down = async function(knex) {
  await knex.schemal;
};
