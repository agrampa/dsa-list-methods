'use strict';

const expect = require('chai').expect;
const List = require('../list.js');

let list = new List();

describe('array methods', function() {
  describe('.push method', function() {
    let pushTest = list.testPush(2);
    
    it('should begin with an array', done => {
      expect(pushTest).to.be.an('object');
      done();
    });
    
    it('should return the length of the array before the method was applied', done => {
      expect(pushTest['0']).to.equal(2);
      done();
    });
    
    it('should add an element to the list and return the new length of the list', done => {
      expect(pushTest).to.have.lengthOf(1);
      done();
    });
    
  });
  
  describe('.pop method', function() {
    let popTest = list.testPush(2);
    
    it('should begin with an object', done => {
      expect(popTest).to.be.an('object');
      done();
    });
    
    it('should return the length of the array before the method was applied', done => {
      expect(popTest).to.have.lengthOf(1);
      done();
    });
    
    it('should remove an element from the array and return the new length of the array', done => {
      let testingPopMethod = popTest.testPop();
      expect(testingPopMethod['0']).to.not.equal(2);
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