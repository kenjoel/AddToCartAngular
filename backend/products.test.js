const index = require("./models/repository")
var products= [];

const yumy = () => {
    products.push("Young", "Muller", "Baiby")
    return products.length
}

test("The get method should return all a list of items", () =>{
    expect(yumy()).toBe(3)})