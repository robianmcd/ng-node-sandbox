var HomeCtrl = function(utils) {
    this.utils = utils;

    this.numClicks = 0;
    this.message = "";
};

HomeCtrl.prototype.doSomething = function() {
    this.numClicks++;
    this.message = "You clicked the button. Way to go!";

    var _this = this;
    this.utils.applyMediumDelay(function() {
        _this.message = "";
    });
};