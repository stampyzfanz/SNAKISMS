BasicGame.Alcoholism = function(game) {
	BasicGame.Snake.call(this, game);
};

BasicGame.Alcoholism.prototype = Object.create(BasicGame.Snake.prototype);
BasicGame.Alcoholism.prototype.constructor = BasicGame.Alcoholism;

BasicGame.Alcoholism.prototype.create = function() {
	BasicGame.Snake.prototype.create.call(this);

	this.ateApple = false;
	this.stateName = "Alcoholism";
};

BasicGame.Alcoholism.prototype.update = function() {
	BasicGame.Snake.prototype.update.call(this);
};

BasicGame.Alcoholism.prototype.tick = function() {
	BasicGame.Snake.prototype.tick.call(this);


	if (this.savedNext) {
		debugger;
		this.next = this.savedNext;
		this.savedNext = undefined;
		console.log('haha communism')
		debugger;
		return;
	}

	if (Math.random() < 0.2 && this.next.x || this.next.y) {
		this.savedNext = new Phaser.Point(this.next.x, this.next.y);
		if (this.next.x == 0) {
			this.next.x = Math.random() < 0.5 ? this.GRID_SIZE : -this.GRID_SIZE;
		} else {
			this.next.y = Math.random() < 0.5 ? this.GRID_SIZE : -this.GRID_SIZE;
		}
	}
}

BasicGame.Alcoholism.prototype.gameOver = function() {
	BasicGame.Snake.prototype.gameOver.call(this);
};