var add = require('../src/add');
// import { add } from '../scr/add';
// import assert from "assert";
var assert = require('assert');


describe('add', function () {
  it('add(3, 4) shoud be 7', function () {
    assert.equal(add.add(3, 4), 7);
  })
})