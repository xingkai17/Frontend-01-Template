const assert = require('assert');
const add = require('../src/add');
// import { add } from '../scr/add';
// import assert from "assert";

describe('add', () => {
  it('add(3, 4) shoud be 7', () => {
    assert.equal(add.add(3, 4), 7);
  });
});
