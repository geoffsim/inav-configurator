'use strict';

var mspStatistics = function() {

    let publicScope = {},
        privateScope = {};

    privateScope.statistics = {};


    publicScope.add = function(code, duration) {
        if (!privateScope.statistics[code]) {
            privateScope.statistics[code] = {
                ctime: new Date().getTime(),
                count: 0,
                duration: 0,
                average: 0
            };
        }
        privateScope.statistics[code].count++;
        privateScope.statistics[code].duration += duration;
        privateScope.statistics[code].average = privateScope.statistics[code].duration / privateScope.statistics[code].count;
    };

    publicScope.get = function() {
        return privateScope.statistics;
    };

    publicScope.reset = function() {
        privateScope.statistics = {};
    };

    return publicScope;

}();

module.exports = mspStatistics;