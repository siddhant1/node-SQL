const router = require("express").Router();
const { getAllCustomer, AddCustomer } = require("./passengerLogic");
//! GET ROUTE

router.get("/", async (req, res) => {
  const result = await getAllCustomer();
  return res.json(result.rows);
});

router.post("/", async (req, res) => {
  const { id, name } = req.body;
  const passenger = await AddCustomer(id,name);
  console.log(passenger)
});

module.exports = router;
