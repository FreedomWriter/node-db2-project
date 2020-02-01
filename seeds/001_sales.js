exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("sales")
    .truncate()
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("sales").insert([
        {
          sales_id: 1,
          car_id: 1,
          buyer: "Trayvon Chevy",
          price: ".99",
          purchase_method: "Paid in full"
        },
        {
          sales_id: 2,
          car_id: 2,
          buyer: "Sandra Chevy",
          price: "55",
          purchase_method: "Paid in full"
        },
        {
          sales_id: 3,
          car_id: 3,
          buyer: "Eric Cadillac",
          price: ".50",
          purchase_method: "Paid in full"
        }
      ]);
    });
};
