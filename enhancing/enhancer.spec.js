const enhancer = require("./enhancer.js");

const item1 = {
  name: "Iron Sword",
  enhancement: 12,
  durability: 50
};

const item2 = {
  name: "Golden Scythe",
  enhancement: 4,
  durability: 70
};

const item3 = {
  name: "Excalibur",
  enhancement: 20,
  durability: 100
};

test("Should return an item with the durability restored to 100.", function() {
  expect(enhancer.repair(item1)).toEqual({
    name: item1.name,
    enhancement: item1.enhancement,
    durability: 100
  });
});

test("Should return an item with the enhancementt 1 point higher, unless it is 20", function() {
  expect(enhancer.succeed(item1)).toEqual({
    name: item1.name,
    enhancement: 13,
    durability: item1.durability
  });
  expect(enhancer.succeed(item2)).toEqual({
    name: item2.name,
    enhancement: 5,
    durability: item2.durability
  });
  expect(enhancer.succeed(item3)).toEqual({
    name: item3.name,
    enhancement: 20,
    durability: item3.durability
  });
});
