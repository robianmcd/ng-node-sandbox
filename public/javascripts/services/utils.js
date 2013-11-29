var ngNodeModule = angular.module('ngNodeSandbox');

ngNodeModule.factory('utils', function($timeout) {return new Utils($timeout);});

var Utils = function($timeout) {
    this.$timeout = $timeout;
};

Utils.prototype.applyMediumDelay = function(func) {
    this.$timeout(func, 1000);
};