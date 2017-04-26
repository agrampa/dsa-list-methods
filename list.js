'use strict';

function List() {
  for(let keys in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
}

List.prototype.copy = function() {
  let result = new List();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
}

List.prototype.push = function(value) {
  let result = this.copy();
  result[resul.length++] = value;
  return result;
}

List.prototype.pop = function() {
  let result = this.copy();
  delete result[--result.length];
  return{
    value: this[this.length - 1],
    list: result;
  }
}

List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

List.prototype.filter = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push[i];
  }
  return result;
}

List.prototype.map = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
    result.push[i];
  }
  return result;
}

List.prototype.reduce = function(callback) {
  let sum = 0;
  for(let i = 0; i < this.length; i++){
    sum += this[i];
    callback(sum, this[i], i, this);
  }
  return sum;
}