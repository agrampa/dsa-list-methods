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
    let forEachTest = list.testPush(2);
    
    it('should begin with an object', done => {
      expect(forEachTest).to.be.an('object');
      done();
    });
    
    it('should add three to the value and return 5', done => {
      let forEach = forEachTest.testForEach((forEachTest) => {
        forEachTest += 3;
        expect(forEachTest).to.equal(5);
        done();
      });
    });
    
    it('should not equal the original value anymore', done => {
      let forEach = forEachTest.testForEach((forEachTest) => {
        forEachTest += 3;
        expect(forEachTest).to.not.equal(2);
        done();
      });
    })
  });
  
  describe('.filter method', function() {
    let filterTest = list.testPush(2);
    
    it('should begin with an object', done => {
      expect(filterTest).to.be.an('object');
      done();
    });
    
    it('should return the value if the filter callback is true', done => {
      let filter = filterTest.testFilter((filterTest) => {
        filterTest > 3;
      });
      expect(filter).to.be.empty;
      done();
    });
    
    it('should not return the value if the filter callback is false', done => {
      let filter = filterTest.testFilter((filterTest) => {
        filterTest < 3;
      });
      expect(filterTest).to.have.lengthOf(1);
      done();
    });
  });
  
  describe('.map method', function() {
    let mapTest = list.testPush(2);

    it('should begin with an object', done => {
      expect(mapTest).to.be.an('object');
      done();
    });
    
    it('should ')
  });
  
  describe('.reduce method', function() {
    let reduceTest = list.testPush(2);

    it('should begin with an object', done => {
      expect(reduceTest).to.be.an('object');
      done();
    });
  });
});