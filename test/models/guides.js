var assert = require('chai').assert;

var Guides = require('../../source/models/guides');
var Manager = require('../../source/models/manager');

describe('Guides', function () {

  var guides, manager;

  beforeEach(function () {
    manager = new Manager();
    guides = manager.guides;
  });

  describe('.generate', function () {

    it('should auto generate', function () {
      manager.add({id: 0, x: 100, y: 100, width: 100, height: 100});
    });

  });

  describe('.snap', function () {

    it('should snap to a guide', function () {
      manager.add({id: 0, x: 100, y: 100, width: 100, height: 100});

      assert.equal(guides.snap('horizontal', 94), 94);
      assert.equal(guides.snap('horizontal', 95), 100);
      assert.equal(guides.snap('horizontal', 105), 100);
      assert.equal(guides.snap('horizontal', 106), 106);
    });

  });

});