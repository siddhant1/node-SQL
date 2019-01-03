const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "passengers",
  password: "siddhant69",
  port: 5432
});

const getAllCustomer = () => {
  return pool.query("Select * from passenger_name");
};

const getCustomer = (id) => {
  return pool.query("Select * from passenger_name where id=$1",[id]);
};


const AddCustomer = (id, name) => {
  return pool.query(
    "INSERT INTO passenger_name (id,name) VALUES ($1, $2)",
    [id, name]
  );
};

exports.getAllCustomer = getAllCustomer;
exports.AddCustomer = AddCustomer;
exports.getCustomer = getCustomer
