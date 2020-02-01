exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("cars")
    .truncate()
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          VIN: "JGPS98RTANJ;",
          make: "Chevy",
          model: "Caprice Classic",
          mileage: 130476,
          transType: "automatic",
          titleStatus: "salvage",
          sales_id: 1
        },
        {
          id: 2,
          VIN: "KDVAP94RJ",
          make: "Chevy",
          model: "Malibu",
          mileage: 35897,
          transType: "automatic",
          titleStatus: "clean",
          sales_id: 2
        },
        {
          id: 3,
          VIN: "Q84TNPQHGHPS",
          make: "Cadillac",
          model: "Sedan deVille",
          mileage: 3,
          transType: "",
          titleStatus: "",
          sales_id: 3
        }
      ]);
    });
};
