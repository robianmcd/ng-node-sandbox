var HomeCtrl = function(utils) {
    this.utils = utils;

    this.numClicks = 0;
    this.message = "";
};

HomeCtrl.prototype.doSomething = function() {
    this.numClicks++;
};