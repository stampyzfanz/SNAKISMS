BasicGame.Conservatism = function (game) {
  BasicGame.Snake.call(this,game);
};

BasicGame.Conservatism.prototype = Object.create(BasicGame.Snake.prototype);
BasicGame.Conservatism.prototype.constructor = BasicGame.Snake;

BasicGame.Asceticism.prototype.create = function () {
  BasicGame.Snake.prototype.create.call(this);

  this.stateName = "Conservatism";
};