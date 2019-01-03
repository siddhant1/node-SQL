const router = require("express").Router();
const {
  getAllCustomer,
  AddCustomer,
  getCustomer
} = require("./passengerLogic");
//! GET ROUTE

router.get("/", async (req, res) => {
  const result = await getAllCustomer();
  return res.json(result.rows);
});

router.get("/:id", async (req, res) => {
  const result =  await getCustomer(req.params.id);
  res.json(result.rows)

});
//? POST ROUTE
router.post("/", async (req, res) => {
  const { id, name } = req.body;
  const passenger = await AddCustomer(id, name);
  console.log(passenger);
});

module.exports = router;
