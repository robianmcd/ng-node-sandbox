var HomeCtrl = function($log) {
    this.$log = $log;
};

HomeCtrl.prototype.doSomething = function() {
    this.$log.info("You clicked the button. Way to go!");
};