const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");


//creating model: (name, schema)
const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };