'use strict';

module.exports = function List() {
  let array = [];
  for(let keys in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
}

//O(n)
exports.testCopy = function() {
  let result = new List();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
}

//O(n)
exports.testPush = function(value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
}

//O(n)
exports.testPop = function() {
  let result = this.copy();
  delete result[--result.length];
  return{
    value: this[this.length - 1],
    list: result
  }
}

//O(n)
exports.testForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

//O(n)
exports.testFilter = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push[i];
  }
  return result;
}

//O(n)
exports.testMap = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
    result.push[i];
  }
  return result;
}

//O(n)
exports.testReduce = function(callback) {
  let sum = 0;
  for(let i = 0; i < this.length; i++){
    sum += this[i];
    callback(sum, this[i], i, this);
  }
  return sum;
}