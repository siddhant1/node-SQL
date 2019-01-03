const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "passengers",
  password: "putyourshere",
  port: 5432
});

const getAllCustomer = () => {
  return pool.query("Select * from passenger_name");
};

const AddCustomer = (id, name) => {
  return pool.query(
    "INSERT INTO passenger_name (id,name) VALUES ($1, $2)",
    [id, name]
  );
};

exports.getAllCustomer = getAllCustomer;
exports.AddCustomer = AddCustomer;
