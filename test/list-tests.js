'use strict';

const expect = require('chai').expect;
const methods = require('../list.js');

describe('array methods', function() {
  describe('.push method', function() {
    let pushTest = [1, 2, 3, 4, 5, 6]; // dont do this, instead create an instance of the array in the before block, run node and require as a const to test 
    
    it('should begin with an array', done => {
      expect(pushTest).to.be.an('array');
      done();
    });
    
    it('should return the length of the array before the method was applied', done => {
      expect(pushTest).to.have.lengthOf(6);
      done();
    });
    
    it('should add an element to an array and return the new length of the array', done => {
      pushTest.methods.push(7);
      expect(pushTest).to.have.lengthOf(7);
      done();
    });
  });
  
  describe('.pop method', function() {
    let popTest = [7, 8, 9, 10, 11];
    
    it('should begin with an array', done => {
      expect(popTest).to.be.an('array');
      done();
    });
    
    it('should return the length of the array before the method was applied', done => {
      
      
      done();
    });
    
    it('should remove an element from the array and return the new length of the array', done => {
      
      
      done();
    });
  });
  
  describe('.forEach method', function() {
    let forEachTest = [12, 13, 14, 15, 16];
    
    it('should begin with an array', done => {
      expect(forEachTest).to.be.an('array');
      done();
    });
  });
  
  describe('.filter method', function() {
    let filterTest = [17, 18, 19, 20, 21];
    
    it('should begin with an array', done => {
      expect(filterTest).to.be.an('array');
      done();
    });
  });
  
  describe('.map method', function() {
    let mapTest = [22, 23, 24, 25, 26];
    
    it('should begin with an array', done => {
      expect(mapTest).to.be.an('array');
      done();
    });
  });
  
  describe('.reduce method', function() {
    let reduceTest = [27, 28, 29, 30, 31, 32];
    
    it('should begin with an array', done => {
      expect(reduceTest).to.be.an('array');
      done();
    });
  });
});