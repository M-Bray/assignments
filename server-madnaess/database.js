const uuid = require('uuid');

const Transformer = function (bot) {
  this._id = uuid();
  this.name = bot.name;
  this.affiliation = bot.affiliation;
  this.vehicle = bot.vehicle;
}

const Database = function () {
  this.transformers = [];
}

Database.prototype.find = function () {
  return this.transformers;
}

Database.prototype.save = function (bot) {
  const newBot = new Transformer(bot);
  this.transformers.push(newBot);
  return newBot;
}

Database.prototype.findByIdAndRemove = function (id) {
  const foundBot = this.transformers.find(bot => {
    return bot._id === id;
  })
  //make sure bot isn't undefined
  if (foundBot === undefined) return;

  //find index of bot
  const index = this.transformers.indexOf(foundBot);
  //remove it frim the array
  this.transformers.splice()
}

Database.prototype.findByAndUpdate = function (id, updates) {

  const foundBot = this.transformers.find(bot => {
    return bot._id === id;
  })

  const index = this.transformers.indexOf(foundBot)

}


module.exports = new Database();