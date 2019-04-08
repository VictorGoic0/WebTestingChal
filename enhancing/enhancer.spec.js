const enhancer = require("./enhancer.js");

const item1 = {
  name: "item 1",
  enhancement: 12,
  durability: 50
};

const item2 = {
  name: "item 2",
  enhancement: 18,
  durability: 70
};

const item3 = {
  name: "item 3",
  enhancement: 4,
  durability: 100
};

test("Should return an item with the durability restored to 100.", function() {
  expect(enhancer.repair(item1)).toEqual({
    name: item1.name,
    enhancement: item1.enhancement,
    durability: 100
  });
});
