const uuid = require('uuid');

const CosmicBeverage = function(beverage){
  this._id = uuid();
  this.name = beverage.name;
  this.origin = beverage.origin;
  this.price = beverage.price;
}

const Database = function() {
  this.cosmicBeverages = [];
}

Database.prototype.find = function() {
  return this.cosmicBeverages;
}

Database.prototype.save = function(beverage) {
  const newBeverage = new CosmicBeverage(beverage);
  this.cosmicBeverages.push(newBeverage);
  return newBeverage;
}

Database.prototype.findByIdAndRemove = function(id){
  const foundBeverage = this.cosmicBeverages.find(beverage => {
    return beverage._id === id;
  })
  if(foundBeverage === undefined) return;

  //find index of beverage
  const index = this.cosmicBeverages.indexOf(foundBeverage);
  //remove it frim the array
  this.cosmicBeverages.splice()
}

Database.prototype.findByAndUpdate = function (id, updates) {

  const foundBeverage = this.cosmicBeverages.find(beverage => {
    return beverage._id === id;
  })

  const index = this.cosmicBeverages.indexOf(foundBeverage)

}


module.exports = new Database();