exports.up = async function(knex) {
  await knex.schema.createTable("sales", table => {
    table.increments("sales_id");
    table.integer("car_id").notNull();
    table
      .foreign("car_id")
      .references("id")
      .inTable("cars");
    table.string("buyer").notNull();
    table.integer("price").notNull();
    table.string("purchase_method").notNull();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("sales");
};
