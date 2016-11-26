var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Dummy = require('Dummy');

describe('Dummy', () => {
  it('should exist', () => {
    expect(Dummy).toExist();
  });
});
