"use strict";

module.exports = function (grunt) {
  grunt.task.registerMultiTask("cssexplain", "Explain css selectors", function () {
    console.log(arguments);
  });
};